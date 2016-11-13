var redis = require('redis'),
    client = redis.createClient();

client.on('error', function (err) {
    console.log('An error occured: ' + err);
});

client.set('node.js', 'Hello', function (err, res) {
    client.append('node.js', ' World', function (err, res) {
        client.get('node.js', function (err, res) {
            console.log(res);
            client.quit();
        }); });
});

client.quit();
