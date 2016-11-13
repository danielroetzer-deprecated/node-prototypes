var http = require('http');
http.get('http://www.google.de', function (response) {
    response.setEncoding('utf8');
    response.on('readable', function () {
        console.log(response.read());
    });
});