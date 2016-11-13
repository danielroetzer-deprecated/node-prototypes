var net = require('net');

var client = net.connect({port: 8080, host: '127.0.0.1'}, function () {
    client.end('Hello Server!');
});
