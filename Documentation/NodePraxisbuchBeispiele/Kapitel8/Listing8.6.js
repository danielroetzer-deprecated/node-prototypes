var http = require('http');
http.createServer(
    function(request, response) {
        response.statusCode = 418;
        response.setHeader('content-type', 'text/html');
        response.end();
    }).listen(8080, 'localhost');