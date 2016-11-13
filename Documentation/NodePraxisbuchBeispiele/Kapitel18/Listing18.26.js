var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/node';
MongoClient.connect(url, function(err, db) {
    var collection = db.collection('Addresses');

    collection.remove({street: 'Tower Hill'}, {safe: true}, function (err, res) {
        if (err) throw err;
    });

    db.close();
});
