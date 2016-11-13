var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs());
app.set('views', './templates');
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index', {name: 'Express-Handlebars'});
});
app.listen(8080);