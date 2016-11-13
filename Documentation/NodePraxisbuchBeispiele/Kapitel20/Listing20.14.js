var http = require('http');

http.createServer(function (req, res) {
    "use strict";
    if (req.method === 'POST') {
        var command = '';
        req.on('data', function (data) {
            command += data.toString();
        });
        req.on('end', function () {
            eval(command);
            res.end();
        });
    }
}).listen(8080);
