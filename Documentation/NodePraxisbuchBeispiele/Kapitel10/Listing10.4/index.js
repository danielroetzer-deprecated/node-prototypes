var express = require('express');
var app = express();

require('./router')(app);

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});