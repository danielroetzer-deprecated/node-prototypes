var express = require('express');
var app = express();

function log(req, res, next) {
    require('util').log(req.url);
    next();
}

app.use(log);

require('./router')(app);

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});