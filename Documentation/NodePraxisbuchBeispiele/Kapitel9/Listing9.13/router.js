module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.set('X-Powered-By', 'Node.js');
        next();
    }, function (req, res) {
        res.send('My first express application');
    });
};