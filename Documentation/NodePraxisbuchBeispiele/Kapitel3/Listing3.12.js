var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
    response.writeHead(200,
        {'content-type': 'text/plain; charset=utf-8'});
    var urlString = url.parse(request.url, true);
    var body = 'Hello ' + urlString.query.name;
    response.end(body);
}).listen(8080, '127.0.0.1');
console.log('Webserver wird ausgeführt.');