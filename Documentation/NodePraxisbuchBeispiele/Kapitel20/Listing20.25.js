var http = require('http');
var url = require('url');
var entities = require('entities');

http.createServer(function (req, res) {
    var input = url.parse(req.url, true).query.input;
    res.end('<html><body>' +
        entities.encode(input) +
        '</body></html>');
}).listen(8080);
