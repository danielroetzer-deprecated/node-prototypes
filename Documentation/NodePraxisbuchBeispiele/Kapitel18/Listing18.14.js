var sqlite = require('sqlite3');
var db = new sqlite.Database('node.db');

db.run('DELETE FROM Addresses WHERE rowid = ?',
    [1],
    function (err) {
        if (err) throw err;
        console.log(this.changes);
    });
