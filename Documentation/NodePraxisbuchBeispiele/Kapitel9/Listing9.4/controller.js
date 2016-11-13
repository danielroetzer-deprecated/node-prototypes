module.exports = {
    indexAction: indexAction,
    listAction: listAction
};
function indexAction (req, res) {
    res.send('My first express application');
}
function listAction (req, res) {
    res.send('Gamma, Helm, Johnson, Vlissides');
}