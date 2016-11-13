var net = require('net');

var client = net.connect('/tmp/nodejs.sock', function () {
    var count = 0,
        number = 0,
        interval = setInterval(function () {
            if (count < 100) {
                number = Math.ceil(Math.random() * 100);
                console.log(number);
                client.write(number.toString());
                count += 1;
            } else {
                clearInterval(interval);
                client.end();
            }
        }, 500);
});

client.on('readable', function () {
    console.log('subtotal: ' + client.read().toString());
});
