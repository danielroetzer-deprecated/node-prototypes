var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/node';
MongoClient.connect(url, function(err, db) {
    var collection = db.collection('Addresses');

    db.close();
});