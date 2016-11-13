var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express();

var options = {
    immediate: true
};

app.use(morgan('combined', options));
app.use(serveStatic('public'));

require('./router')(app);

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});