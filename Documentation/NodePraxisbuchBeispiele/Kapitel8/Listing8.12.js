var http = require('http');
var request = http.request({
    host: 'www.google.de',
    port: 80,
    method: 'GET',
    path: '/?q=node.js',
    headers: {
        'accept': 'text/html',
        'userAgent': 'node.js'
    },
    agent: false
}, function (response) {
    response.setEncoding('utf8');
    response.on('readable', function (data) {
        console.log(response.read());
    });
});
request.end();