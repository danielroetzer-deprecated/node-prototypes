var http = require('http');

http.createServer(
    function(request, response) {
        debugger;
        response.writeHead(200, {'content-type': 'text/plain'});
        response.end('Hello World');
    }
).listen(8000, 'localhost');
