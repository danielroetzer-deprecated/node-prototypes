var sqlite = require('sqlite3');
var db = new sqlite.Database('node.db');

db.get('SELECT * FROM Addresses WHERE rowid = ?',
    [1],
    function (err, row) {
        if (err) throw err;
        console.log(row);
    });
