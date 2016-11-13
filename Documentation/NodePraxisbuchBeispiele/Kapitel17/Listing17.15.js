var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.on('message', function (data) {
    console.log(data.toString());
});
socket.bind(8080, '127.0.0.1', function () {
    console.log('server listening on 127.0.0.1:8080');
});
