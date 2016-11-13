var net = require('net');
var writable = net.connect(
    {host: '127.0.0.1', port: 8181},
    function () {
        var readable = net.connect(
            {host: '127.0.0.1', port: 8080},
            function () {
                readable.pipe(writable);
            });
    });
