var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/node';
MongoClient.connect(url, function(err, db) {
    var collection = db.collection('Addresses');

    var address = {
        street: 'Broadway 1',
        place: 'New York',
        country: 'United States of America'
    };
    collection.insert(address, {safe: true}, function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    db.close();
});
