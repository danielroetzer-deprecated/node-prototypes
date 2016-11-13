module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('My first express application');
    });
    app.get('/list', function (req, res) {
        res.send('Gamma, Helm, Johnson, Vlissides');
    });
};