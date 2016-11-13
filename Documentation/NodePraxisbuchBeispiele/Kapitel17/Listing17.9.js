var net = require('net');

net.createServer(
    function (socket) {
        socket.on('readable', function () {
            var data = socket.read();
            if (Buffer.isBuffer(data)) {
                console.log(data.toString());
            }
        }); }
).listen(8080, '127.0.0.1');
