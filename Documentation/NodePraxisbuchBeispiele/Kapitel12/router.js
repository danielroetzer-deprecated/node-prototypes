var controller = require('./controller.js');

module.exports = function(app) {
    app.get('/movie', controller.fetchAll);
    app.post('/movie', controller.create);
    app.get('/movie/:id', controller.fetch);
    app.put('/movie/:id', controller.update);
    app.delete('/movie/:id', controller.remove);
};