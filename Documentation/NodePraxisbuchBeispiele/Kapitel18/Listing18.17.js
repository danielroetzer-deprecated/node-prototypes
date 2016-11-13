var redis = require('redis'),
    client = redis.createClient();

client.on('error', function (err) {
    console.log('An error occured: ' + err);
});

client.set('node.js', 'Hello World', function (err, res) {
    if (err) throw err;
    console.log(res);
    client.quit();
});

client.quit();
