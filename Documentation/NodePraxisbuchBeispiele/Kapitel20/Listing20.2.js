var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var parts = url.parse(req.url, true);
    var name = '';

    if (parts.query.name) {
        name = parts.query.name
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    res.end(`<div>Hello ${name}</div>`);
}).listen(8080);
