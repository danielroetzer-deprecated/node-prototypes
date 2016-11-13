var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node'
});

connection.connect();

connection.query('DELETE FROM Addresses WHERE id = ?', 1, function (err, result) {
    if (err) throw err;
    console.log(result);
    connection.end();
});
