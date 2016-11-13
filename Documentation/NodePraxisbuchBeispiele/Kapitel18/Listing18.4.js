var mysql      = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user     : 'root',
    password : '',
    database : 'node'
});

connection.connect();

var values = {
    street: 'Broadway 1',
    place: 'New York',
    country: 'United States of America'
};
connection.query('INSERT INTO Addresses SET ?', values, function (err, result) {
    if (err) throw err;
    console.log(result);
    connection.end();
});
