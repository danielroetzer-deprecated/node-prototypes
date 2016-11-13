var http = require('http'),
    mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test',
    multipleStatements: true
});

http.createServer(function (req, res) {
    var id = require('url').parse(req.url, true).query.id;

    if (id != undefined) {
        var sql = 'SELECT * FROM users WHERE id = ' + id;

        connection.query(sql, function (err, result) {
            var data = result[0];
            res.end('ID: ' + data.id + ' name: ' + data.name);
        }); }
}).listen(8080);
