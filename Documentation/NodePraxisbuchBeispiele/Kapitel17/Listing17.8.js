var net = require('net');

net.createServer(function (conn) {
    conn.write('Hello Client');
    conn.end();
}).listen('\\\\.\\pipe\\node-pipe');
