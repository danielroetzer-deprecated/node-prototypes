module.exports = {
    indexAction: indexAction
};
function indexAction (req, res) {
    var data = {
        gof: [
            {name: 'Erich Gamma', dateOfBirth: '13.03.1961'},
            {name: 'Richard Helm'},
            {name: 'Ralph Johnson', dateOfBirth: '07.10.1955'},
            {name: 'John Vlissides'}
        ] };
    res.render('index', data);
}