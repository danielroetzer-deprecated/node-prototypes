var express = require('express');
var app = express();

var morgan = require('morgan');
var fs = require('fs');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.use(morgan('combined', {stream:accessLogStream}));


app.get('/', function (req, res) {
    res.send('Logging...')
});

app.listen(3000, function () {
    console.log('Server listening on port 3000')
});