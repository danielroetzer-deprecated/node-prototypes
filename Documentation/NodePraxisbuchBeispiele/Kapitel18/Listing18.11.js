var sqlite = require('sqlite3');
var db = new sqlite.Database('node.db');

db.run('INSERT INTO Addresses VALUES (?, ?, ?)',
    ['Broadway 1', 'New York', 'United States of America'],
    function (err) {
        if (err) throw err;
        console.log('ID: ' + this.lastID);
    });
