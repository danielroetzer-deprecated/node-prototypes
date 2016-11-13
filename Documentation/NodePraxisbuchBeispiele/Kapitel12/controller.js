var movie = require('./model');

function fetchAll(req, res) {
    movie.fetchAll().then(function success(rows) {
        res.send(rows);
    }, function failure(err) {
        res.send(err);
    })
}
function fetch(req, res) {
    movie.fetch(req.params.id).then(function success(row) {
        res.send(row);
    }, function failure(err) {
        res.send(err);
    })
}
function create(req, res) {
    var movieData = {
        title: req.body.title,
        year: req.body.year
    };
    console.log(movieData);

    movie.insert(movieData).then(function(id) {
        res.send(JSON.stringify({id: id}));
    });
}
function update(req, res) {
    var movieData = {
        title: req.body.title,
        year: req.body.year
    };

    movie.update(movieData, req.params.id).then(function() {
        res.send(JSON.stringify(true));
    });
}
function remove(req, res) {
    movie.remove(req.params.id).then(function() {
        res.send(JSON.stringify(true));
    });
}


module.exports = {
    fetchAll: fetchAll,
    fetch: fetch,
    create: create,
    update: update,
    remove: remove
};