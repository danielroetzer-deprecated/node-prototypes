var net = require('net'),
    fs = require('fs');

net.createServer(
    function (socket) {
        var file = '';

        socket.on('readable', function () {
            file += socket.read();
        });

        socket.on('end', function () {
            var input = new Buffer(file, 'base64');
            fs.writeFile('dest.jpg', input);
        });
    }
).listen(8080, '127.0.0.1');
