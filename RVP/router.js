/**
 * Created by Rötzer on 16.11.2016.
 */

var controller = require('./controller/controller');

//Defining routes and which function they execute from the controller
module.exports = function (app) {
    app.get('/', controller.indexAction);
    //app.get('/views/foundation/css/foundation.min.css', controller.sendCSS);
};