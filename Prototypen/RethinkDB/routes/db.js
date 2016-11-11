/**
 * Created by Rötzer on 11.11.2016.
 */

var r = require('rethinkdb');
var async = require('async');

var config = require('./../config/config.js');

async.waterfall([
    function connect(callback){
        r.connect(config.rethinkdb,callback);
    },
    function createDatabase(connection, callback) {
        r.dbCreate('prototype').run(connection,function(err, result) {
            if(err) {
                console.log("Database already created");
            } else {
                console.log("Created new database");
            }
            //Write connection information in console
            //callback(null,connection);
        });
    },
    function createTable(connection,callback) {
        r.db('prototype').tableCreate('protoTable').run(connection,function(err,result) {
            connection.close();
            if(err) {
                console.log("Table already created");
            } else {
                console.log("Created new table");
            }
            callback(null,"Database is setup successfully");
        });
}],function(err,data) {
    console.log(data);
});

