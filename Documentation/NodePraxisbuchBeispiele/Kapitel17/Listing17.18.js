var dgram = require('dgram'),
    client = dgram.createSocket("udp4"),
    count = 1;

var sendData = function () {
    var message = new Buffer(Math.ceil(Math.random() * 100) + '');

    client.send(message, 0, message.length, 8080, "127.0.0.1", function(err, bytes) {

        count += 1;

        if (count > 1000 || err) {
            client.close();
            clearInterval(interval);
        }
    });
};

var interval = setInterval(sendData, 1);
