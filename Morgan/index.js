const express = require('express');
const app = express();

//Load morgan and fs
const morgan = require('morgan');
const fs = require('fs');

//Create write stream, in append mode
const accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
//Get express to use morgan
app.use(morgan('combined', {stream:accessLogStream}));


app.get('/', function (req, res) {
    res.send('<a href="/page1">Go to /page1</a>')
});

app.get('/page1', function (req, res) {
    res.send('<a href="/page2">Go to /page2</a>')
});

app.get('/page2', function (req, res) {
    res.send('<a href="/">Go to /</a>')
});

app.listen(3000, function () {
    console.log('Server listening on port 3000')
});