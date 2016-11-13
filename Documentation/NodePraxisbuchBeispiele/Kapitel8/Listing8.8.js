var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    var path = require('url').parse(req.url).path;
    if (path.startsWith('/public/')) {
        fs.readFile(__dirname + path, 'utf8', function (err, data) {
            if (err) {
                res.statusCode = 404;
                res.end();
            } else {
                res.end(data);
            }
        }); } else {
        res.statusCode = 403;
        res.end(); }
}).listen(8080, 'localhost');