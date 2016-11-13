require('http').createServer(function (req, res) {
    var reqData = require('url').parse(req.url, true).query,
        user = new User(reqData.id);

    res.end(user[reqData.method]());

}).listen(8080);
