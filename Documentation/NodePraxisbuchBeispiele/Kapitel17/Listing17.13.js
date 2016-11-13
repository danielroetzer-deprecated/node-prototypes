var net = require('net');

var client = net.connect({host: '127.0.0.1', port: 8080}, function () {
    net.createServer(function (socket) {

        client.on('data', function (data) {

            // calculate

            var flushed = socket.write(data);

            if (!flushed) {
                client.pause();
            }
        });

        socket.on('drain', function () {
            client.resume();
        });
    }).listen(8181, '127.0.0.1');
});
