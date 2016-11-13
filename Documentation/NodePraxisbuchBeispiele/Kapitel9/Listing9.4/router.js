var controller = require('./controller');
module.exports = function (app) {
    app.get('/', controller.indexAction);
    app.get('/list', controller.listAction);
};
