var Person = require('./model');
var view = require('./view');

module.exports = {
    addAction: addAction,
    listAction: listAction
};

var person = new Person();

function listAction (req, res) {
    res.send(view(person.getPersons()));
}

function addAction (req, res) {
    person.addPerson(req.body.name);
    res.redirect('/list');
}