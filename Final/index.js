/**
 * Created by Dani on 15.11.2016.
 */

//Load our winston logger
//======================================================
const logger = require('./config/winston');

//Load config
//======================================================
const config = require('./config/config.js');


//Load and initialize express
//======================================================
const express = require('express');
const app = express();
logger.log('info','configuring express...');



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

logger.log('verbose','http logger loaded');


//Set view engine to pug
//======================================================
app.set('view engine', 'pug');
logger.log('verbose','view engine set to pug');


//Load the router
//======================================================
require('./routes/routes')(app);
logger.log('verbose','routing paths set');


//Listener
//======================================================
app.listen(config.server.port, function () {
    logger.log('info','express configured');
    logger.log('info','listening on port: ' + config.server.port);
});


//Load Database file and load the first setup
//======================================================
const db = require('./models/db.js');

logger.log('info','loading database setup...');
db.initDB();
