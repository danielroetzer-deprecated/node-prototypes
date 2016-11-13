var redis = require('redis'),
    client = redis.createClient();

client.on('error', function (err) {
    console.log('An error occured: ' + err);
});

client.del('node.js', function (err, res) {
    console.log(res);
    client.quit();
});

client.quit();
