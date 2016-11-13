var http = require('http');
http.request('http://www.google.de', function (response) {
    response.setEncoding('utf8');
    response.on('readable', function () {
        console.log(response.read());
    });
}).end();