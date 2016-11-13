var redis = require('redis'),
    client = redis.createClient();

client.on('error', function (err) {
    console.log('An error occured: ' + err);
});

client.quit();
