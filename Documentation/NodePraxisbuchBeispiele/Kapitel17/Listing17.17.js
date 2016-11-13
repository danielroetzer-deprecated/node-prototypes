var dgram = require('dgram'),
    socket = dgram.createSocket('udp4'),
    count = 0;

socket.on('message', function (data) {
    console.log((count++) + ': ' + data.toString());

    if (count >= 1000) {
        socket.close();
    }
});

socket.on('close', function () {
    console.log('received ' + count + ' datagrams');
});

socket.bind(8080, '127.0.0.1', function () {
    console.log('server listening on 127.0.0.1:8080');
});
