var http = require('http');

http.createServer(function (req, res) {
    debugger;
    res.end('Hello Client');
}).listen(8080);
