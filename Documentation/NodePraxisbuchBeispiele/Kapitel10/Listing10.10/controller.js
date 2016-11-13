module.exports = {
    indexAction: indexAction
};
function indexAction (req, res) {
    var data = {
        name: 'World'
    };
    res.render('index', data);
}