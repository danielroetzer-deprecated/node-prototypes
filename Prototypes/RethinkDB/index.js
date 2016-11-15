/**
 * Created by Rötzer on 11.11.2016.
 */


//Load and start Express
var express = require('express');
var app = express();


//Load config
var config = require('./config/config.js');

//Load Database file
var db = require('./models/db.js');

db.initDB();
db.insertTestData();

app.get('/',function (req, res) {
    res.send('Main page');
});


app.listen(config.server.port, function () {
    console.log('Listening on port: ' + config.server.port)
});