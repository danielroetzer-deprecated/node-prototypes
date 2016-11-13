var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/node';
MongoClient.connect(url, function(err, db) {
    var collection = db.collection('Addresses');

    var newAddress = {street: 'Tower Hill', place: 'London', country: 'United Kingdom'};

    collection.update({street: 'Broadway 1'}, {$set: newAddress}, {safe: true},
        function (err) {
            if (err) throw err;
        }
    );

    db.close();
});
