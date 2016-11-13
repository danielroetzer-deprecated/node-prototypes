var http = require('http');
var request = http.request({
    host: 'localhost',
    port: 8080,
    method: 'GET',
    path: '/' });
request.on('response', function (response) {
    if (response.statusCode === 200 && response.headers['content-type'] === 'text/html') {
        var body = '';
        response.on('readable', function () {
            body += response.read();
        });
        response.on('end', function () {
            console.log(body);
        });
    } else {
        console.log('an error occured');
    }
});
request.end();