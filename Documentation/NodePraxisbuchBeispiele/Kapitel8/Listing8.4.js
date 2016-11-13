var http = require('http');
http.createServer(
    function(request, response) {
        var body = '';
        request.on('readable', function (data) {
            body += request.read();
        });
        request.on('end', function () {
            console.log(body);
        });
        response.writeHead(200, {'content-type': 'text/plain'});
        response.end(body);
    }).listen(8080, 'localhost');