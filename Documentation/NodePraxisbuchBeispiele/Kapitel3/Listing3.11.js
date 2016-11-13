var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200,
        {'content-type': 'text/html; charset=utf-8'});
    var body = '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta charset="utf-8">' +
        '<title>Node.js Demo</title>' +
        '</head>' +
        '<body>' +
        '<h1 style="color:green">Hello World</h1>' +
        '</body>' +
        '</html>';
    response.end(body);
}).listen(8080, '127.0.0.1');
console.log('Webserver wird ausgeführt.');