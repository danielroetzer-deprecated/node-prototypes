var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node'
});

connection.connect();

var values = ['Tower Hill', 'London', 'United Kingdom', 1];

connection.query('UPDATE Addresses SET street = ?, place = ?, country = ? WHERE id = ?', values, function (err, result) {
    if (err) throw err;
    console.log(result);
    connection.end();
});
