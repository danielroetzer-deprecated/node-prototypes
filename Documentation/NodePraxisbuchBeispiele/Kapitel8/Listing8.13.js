var http = require('http');
var request = http.request({
    host: 'localhost',
    port: 8080,
    method: 'POST',
    path: '/users',
    headers: {
        'Transfer-Encoding': 'chunked'
    }
}, function (response) {});
request.write('[{"firstname": "James", "surname": "Bond"},');
request.write('{"firstname": "Sherlock", "surname": "Holmes"}]');
request.end();