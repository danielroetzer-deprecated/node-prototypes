/**
 * Created by Rötzer on 11.11.2016.
 */


//Load Database file
const db = require('./models/db.js');

db.initDB();
setTimeout(db.insertTestData, 2000);
