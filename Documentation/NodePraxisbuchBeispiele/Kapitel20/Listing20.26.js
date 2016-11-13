var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csurf = require('csurf');
var exphbs = require('express-handlebars');
var express = require('express');

var csurfFunc = csurf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

var app = express();
app.use(cookieParser());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', csurfFunc, function(req, res) {
    res.render('form', { csrfToken: req.csrfToken() })
});

app.post('/form', parseForm, csurfFunc, function(req, res) {
    res.send(`You just bought ${req.body.amount} pieces of ${req.body.article}`);
}); app.listen(8080);
