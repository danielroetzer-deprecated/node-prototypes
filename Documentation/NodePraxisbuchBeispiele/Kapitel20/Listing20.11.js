var express = require('express');
var helmet = require('helmet');

var app = express();

app.use(helmet());

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(8080);
