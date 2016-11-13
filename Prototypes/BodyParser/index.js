var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('combined', {immediate: true}));
app.use(serveStatic('public'));
app.use(bodyParser.urlencoded({extended: false}));

require('./router')(app);

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});