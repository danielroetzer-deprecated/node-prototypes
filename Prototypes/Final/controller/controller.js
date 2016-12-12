/**
 * Created by Dani on 15.11.2016.
 */


const db = require('../models/db');
module.exports = {
    indexAction,
    storeAction
};

//Call index page
function indexAction (req, res) {
    res.render('index', {
        title: 'Pug is great!'
    });
}

//Retrieve the submitted data and store them into the database
function storeAction (req, res) {
    //Get data
    const name = req.body.name;
    const age = req.body.age;

    //Store data
    db.insertData(name,age);

    //Show results
    res.render('store', {
        title: 'Pug is great!',
        name: name,
        age: age
    });
}