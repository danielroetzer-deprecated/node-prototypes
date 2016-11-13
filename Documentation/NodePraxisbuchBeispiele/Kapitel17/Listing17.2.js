var net = require('net');

var client = net.connect('/tmp/nodejs.sock', function () {
    console.log('connected to the server');
    client.write('Hello Server');
});
