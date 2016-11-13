var mysql      = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user     : 'root',
    password : '',
    database : 'node'
});

connection.connect();

var query = 'SELECT * FROM Addresses';

connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    console.log(fields);
    connection.end();
});
