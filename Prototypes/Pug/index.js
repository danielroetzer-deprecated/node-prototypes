/**
 * Created by Rötzer on 14.11.2016.
 */

const express = require('express');
const app = express();


//Load config
const config = require('./config/config');

//Load pug
app.set('view engine', 'pug');


//Render the index file and send some arguments
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Pug is great!',
        message: 'Hello there! I am using pug'
    });
});

app.listen(config.server.port, function () {
    console.log('Server listening on port: '+config.server.port);
});