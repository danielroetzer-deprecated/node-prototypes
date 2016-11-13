var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node'
});

connection.connect();

var outputStream = new require('stream').Writable({
    objectMode: true,
    write: function (chunk, enc, done) {
        console.log('Receiving data:');
        console.log(chunk);
        done();
    }
});
outputStream.on('finish', function () {
    connection.end();
});

var query = 'SELECT * FROM Addresses';
connection.query(query)
    .stream()
    .pipe(outputStream);
