/**
 * Created by Rötzer on 16.11.2016.
 */

//Load and initialize express
//======================================================
const express = require('express');
const app = express();


//Load config
//======================================================
const config = require('./config/config.js');


//Set the static files like css public
app.use(express.static(__dirname + '/public'));


//Load pug
//======================================================
app.set('view engine', 'pug');


//Load the router
//======================================================
require('./routes/routes')(app);



//catch 404 and forward to error handler
//======================================================
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler, displays error messages in the browser
//only keep this activated in development
//======================================================
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('templates/error');
});



//Listener
//======================================================
app.listen(config.server.port, function () {
    console.log('Listening on port: ' + config.server.port)
});