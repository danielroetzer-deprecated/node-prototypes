var net = require('net');

var server = net.createServer(function (conn) {
    conn.on('readable', function (data) {
        console.log(conn.read().toString());
    });

    conn.on('end', function () {
        console.log('connection ended');
    });
});

server.listen('/tmp/nodejs.sock', function () {
    console.log('Server listening on /tmp/nodejs.sock');
});
