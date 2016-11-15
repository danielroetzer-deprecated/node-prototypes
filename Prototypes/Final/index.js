/**
 * Created by Dani on 15.11.2016.
 */
//Load and initialize express
//======================================================
const express = require('express');
const app = express();


//Load config
//======================================================
const config = require('./config/config.js');


//Load and initialize the body parser module
//======================================================
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Load morgan and fs modules, write the logs to a file
//======================================================
const morgan = require('morgan');
const fs = require('fs');

const accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});

app.use(morgan('combined', {stream:accessLogStream}));




//Load Database file and load the first setup
//======================================================
const db = require('./models/db.js');

db.initDB();



//Load pug
//======================================================
app.set('view engine', 'pug');


//Load the router
//======================================================
require('./router')(app);



//Listener
//======================================================
app.listen(config.server.port, function () {
    console.log('Listening on port: ' + config.server.port)
});