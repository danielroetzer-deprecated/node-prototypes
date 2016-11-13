module.exports = {
    indexAction: indexAction
};
function indexAction (req, res) {
    var data = {
        gof: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides']
    };
    res.render('index', data);
}