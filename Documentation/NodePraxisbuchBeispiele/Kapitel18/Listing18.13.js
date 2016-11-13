var sqlite = require('sqlite3');
var db = new sqlite.Database('node.db');

db.run('UPDATE Addresses SET street = ?, place = ?, country = ? WHERE rowid = ?',
        ['Tower Hill', 'London', 'United Kingdom', 1],
    function (err) {
        if (err) throw err;
        console.log(this.changes);
    });
