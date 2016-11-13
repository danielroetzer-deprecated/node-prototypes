var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node');

var Addresses = mongoose.model('Addresses', { street: String, place: String, country: String});

var values = {
    street: 'Broadway 1',
    place: 'New York',
    country: 'United States of America'
};

var home = new Addresses(values);
home.save(function (err) {
    if (err) throw err;
    console.log('Address created');
});
