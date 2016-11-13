var net = require('net');

var server = net.createServer(function (conn) {
    var sum = 0,
        count = 0;

    conn.on('readable', function (data) {

        sum += parseInt(conn.read().toString());
        count += 1;

        if (count >= 10) {
            count = 0;
            conn.write(sum.toString());
        }
    });
});

server.listen('/tmp/nodejs.sock', function () {
    console.log('Server listening on /tmp/nodejs.sock');
});
