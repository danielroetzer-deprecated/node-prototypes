var express = require('express');
var morgan = require('morgan');
var app = express();

var options = {
    immediate: true
};

app.use(morgan('combined', options));

require('./router')(app);

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});