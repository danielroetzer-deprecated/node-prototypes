var express = require('express');
var app = express();

app.set('views', './templates');
app.set('view engine', 'jade');

require('./router')(app);

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});