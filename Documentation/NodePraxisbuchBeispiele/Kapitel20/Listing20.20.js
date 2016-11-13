require('http').createServer(function (req, res) {
    var reqData = require('url').parse(req.url, true).query,
        user = new User(reqData.id),
        whitelist = ['getEmail', 'getName'];

    if (reqData.method && whitelist.indexOf(reqData.method) != -1) {
        res.end(user[reqData.method]());
    }
}).listen(8080);
