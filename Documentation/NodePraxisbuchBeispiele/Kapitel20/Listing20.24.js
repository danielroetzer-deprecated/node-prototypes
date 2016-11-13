var http = require('http');

http.createServer(function (req, res) {
    var input = require('url').parse(req.url, true).query.input;
    res.end('<html><body>' + input + '</body></html>');
}).listen(8080);
