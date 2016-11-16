/**
 * Created by Rötzer on 16.11.2016.
 */

//Load and initialize express
//======================================================
const express = require('express');
const app = express();


//Load config
//======================================================
const config = require('./config/config.js');


app.use(express.static(__dirname + '/views'));


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