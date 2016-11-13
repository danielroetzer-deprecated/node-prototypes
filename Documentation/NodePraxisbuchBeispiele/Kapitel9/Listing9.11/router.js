module.exports = function (app) {
    app.get(/.*\/user.*$/, function (req, res) {
        res.end('User Route');
    });
};