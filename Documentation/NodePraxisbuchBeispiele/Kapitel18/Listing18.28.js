var mysql      = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user     : 'root',
    password : '',
    database : 'node'
});

function asyncQuery(connection, query, values) {
    return new Promise(function (resolve, reject) {
        connection.query(query, values, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        }); });
}
var query = 'INSERT INTO Adresses SET ?';
var values = {
    street: 'Broadway 1',
    place: 'New York',
    country: 'United States of America'
};
asyncQuery(connection, query, values).then(function (result) {
    console.log(result);
    connection.end();
});
