var express = require('express');

var app = express();

var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/js', express.static(__dirname + '/js'));

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

function checkAuth(req, res, next) {
    if (!req.session.user) {
        res.redirect('/');
    } else {
        next(); }
}

app.get('/', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    var user = req.body.username,
        pw = req.body.password;

    if (user === 'u1' && pw === 'test') {
        req.session.user = 'u1';
    } else if (user === 'u2' && pw === 'test') {
        req.session.user = 'u2';
    }

    res.redirect('/chat');
});

app.get('/chat', checkAuth, function (req, res) {
    res.render('chat', {user: req.session.user});
});

app.get('/logout', function (req, res) {
    var names = Object.keys(connections);

    names.splice(names.indexOf(req.session.user), 1);

    var msg = '{"names": ["' + names.join('","') + '"]}';

    connections[req.session.user].broadcast.emit('join', msg);

    connections[req.session.user].disconnect();
    delete connections[req.session.user];

    delete req.session.user;

    res.redirect('/');
});

var http = require('http');
var server = http.createServer(app);
server.listen(8080);
var io = require('socket.io').listen(server);

var connections = {};

function getName (connections, socket) {
    var name;
    for (var key in connections) {
        if (socket === connections[key]) {
            name = key; }
    }
    return name;
}

io.sockets.on('connection', function (socket) {
    socket.on('msg', function(message) {
        var data = JSON.parse(message),
            name = getName(connections, socket);

        var msg = '{"name": "' + name + '", "msg":"' + data.msg + '"}';

        socket.emit('msg', msg);
        socket.broadcast.emit('msg', msg);
    });

    socket.on('join', function(message) {
        var data = JSON.parse(message),
            name = getName(connections, socket);

        connections[data.name] = socket;

        var msg = '{"names": ["' + Object.keys(connections).join('","') + '"]}';

        socket.emit('join', msg);
        socket.broadcast.emit('join', msg);
    });
});
