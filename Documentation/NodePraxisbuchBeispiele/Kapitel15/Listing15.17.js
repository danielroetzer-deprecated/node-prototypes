var net = require('net');
net.createServer(function (socket) {
    socket.on('readable', function () {
        var data = socket.read();
        console.log(data);
    });
    socket.end('Hello Client');
}).listen(4321);
