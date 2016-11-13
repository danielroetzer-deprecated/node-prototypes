var controller = require('./controller');
module.exports = function (app) {
    app.get('/list', controller.listAction);
    app.post('/user', controller.addAction)
};