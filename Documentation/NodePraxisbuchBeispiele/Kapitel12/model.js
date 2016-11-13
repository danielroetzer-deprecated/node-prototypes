var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('db/db.sqlite3');

function fetchAll() {
    return new Promise(function (resolve, reject) {
        db.all('SELECT * FROM movies', function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function fetch(id) {
    return new Promise(function (resolve, reject) {
        db.get('SELECT * FROM movies WHERE id = ?', [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function insert(data) {
    return new Promise(function (resolve, reject) {
        db.run('INSERT INTO movies (title, year) VALUES (?, ?)', [data.title, data.year], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
}

function update(data, id) {
    return new Promise(function (resolve, reject) {
        db.run('UPDATE movies SET title = ?, year = ? WHERE id = ?', [data.title, data.year, id], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function remove(id) {
    return new Promise(function (resolve, reject) {
        db.run('DELETE FROM movies WHERE id = ?', [id], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    fetchAll: fetchAll,
    fetch: fetch,
    insert: insert,
    update: update,
    remove: remove
};