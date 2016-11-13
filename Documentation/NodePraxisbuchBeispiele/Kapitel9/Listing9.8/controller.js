var Person = require('./model');
var view = require('./view');
module.exports = {
    indexAction: indexAction,
    listAction: listAction
};
function indexAction (req, res) {
    res.send('My first express application');
}
function listAction (req, res) {
    var person = new Person();
    res.send(view(person.getPersons()));
}