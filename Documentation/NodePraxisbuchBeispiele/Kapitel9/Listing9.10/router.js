module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('My first express application');
    });
    app.get('/list', function (req, res) {
        res.send('Gamma, Helm, Johnson, Vlissides');
    });
    app.post('/list', function (req, res) {
        console.log('Create new user');
        res.send('Create new user');
    });
    app.all('/info', function (req, res) {
        console.log('ALL /info\n');
        res.send('ALL /info');
    });
};