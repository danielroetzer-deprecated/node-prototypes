var net = require('net'),
    fs = require('fs');

fs.readFile('test.jpg', function (err, data) {
    var client = net.connect({port: 8080, host: '127.0.0.1'}, function () {
        client.end(data.toString('base64'));
    });
});
