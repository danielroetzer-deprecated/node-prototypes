var net = require('net'),
    fs = require('fs');

var server = net.createServer(function (conn) {
    conn.on('readable', function (data) {
        console.log(conn.read().toString());
    });

    conn.on('end', function () {
        console.log('connection ended');
    });
});

server.listen('/tmp/nodejs.sock', function () {
    fs.chmod('/tmp/nodejs.sock', 0700, function () {
        console.log('Server listening on /tmp/nodejs.sock');
    });
});
