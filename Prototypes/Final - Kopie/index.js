/**
 * Created by Dani on 15.11.2016.
 */

//Load and start Express
//=======================
var express = require('express');
var app = express();


//Load config
//=============
var config = require('./config/config.js');


//Load and initialize the body parser module
//============================================
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Load morgan and fs modules, write the logs to a file
//======================================================
var morgan = require('morgan');
var fs = require('fs');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.use(morgan('combined', {stream:accessLogStream}));





//Load Database file
//======================
var db = require('./models/db.js');

db.initDB();






//Load pug
//===========
app.set('view engine', 'pug');


//Define routes
//================

//Load main page
app.get('/',function (req, res) {
    res.render('index', {
        title: 'Pug is great!'
    });
});

//Retrieve the submitted values and save them
app.post('/store', function (req,res) {
    var name = req.body.name;
    var age = req.body.age;

    console.log(name + '\n' + age);

    db.insertData(name,age);

    res.render('store', {
        title: 'Pug is great!',
        name: name,
        age: age
    });
});


app.listen(config.server.port, function () {
    console.log('Listening on port: ' + config.server.port)
});