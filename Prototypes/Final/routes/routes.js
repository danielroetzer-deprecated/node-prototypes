/**
 * Created by Rötzer on 05.12.2016.
 */

const controller = require('../controller/controller');

//Defining routes and which function they execute from the controller
module.exports = function (app) {
    app.get('/', controller.indexAction);
    app.post('/store', controller.storeAction);
};