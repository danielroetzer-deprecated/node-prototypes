/**
 * Created by Dani on 15.11.2016.
 */

var controller = require('./controller/controller');
module.exports = function (app) {
    app.get('/', controller.indexAction);
    app.post('/store', controller.storeAction);
};