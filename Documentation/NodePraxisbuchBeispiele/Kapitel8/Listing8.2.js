var Server = require('http').Server;
var server = new Server();
server.addListener('request', function (request, response) {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.write('Hello World');
    response.end();
});
server.listen(8080, 'localhost');