/**
 * Created by Dani on 15.11.2016.
 */


var db = require('../models/db');
module.exports = {
    indexAction,
    storeAction
};
function indexAction (req, res) {
    res.render('index', {
        title: 'Pug is great!'
    });
}
function storeAction (req, res) {
    var name = req.body.name;
    var age = req.body.age;

    console.log(name + '\n' + age);

    db.insertData(name,age);

    res.render('store', {
        title: 'Pug is great!',
        name: name,
        age: age
    });
}