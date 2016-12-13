/**
 * Created by Rötzer on 14.11.2016.
 */

const express = require('express');
const app = express();


//Load config
const config = require('./config/config');

//Load pug
app.set('view engine', 'pug');

//Load body-parser module and initialize it
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Render the index file and send some arguments
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Pug is great!',
        message: 'Hello there! I am using pug'
    });
});

//Retrieve submitted value and send it back
app.post('/',function (req,res) {
    res.render('hello', {
        title: 'Pug is great!',
        userName: req.body.userName
    })
});

app.listen(config.server.port, function () {
    console.log('Server listening on port: '+config.server.port);
});