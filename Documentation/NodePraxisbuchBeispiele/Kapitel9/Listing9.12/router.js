module.exports = function (app) {
    app.get('/user/:name', function (req, res) {
        res.end(`Hello ${req.params.name}`);
    });
};