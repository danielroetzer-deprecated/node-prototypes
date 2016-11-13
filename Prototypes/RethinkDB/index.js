/**
 * Created by Rötzer on 11.11.2016.
 */


//Load and start Express
var express = require('express');
var server = express();


//Load config
var config = require('./config/config.js');

//Load Database file
var db = require('./routes/db.js');





server.get('/',function (req, res) {
    res.send('Main page');
});


server.listen(3000, function () {
    console.log('Listening on port 3000')
});