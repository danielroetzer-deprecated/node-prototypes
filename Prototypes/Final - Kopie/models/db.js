/**
 * Created by Dani on 15.11.2016.
 */

//Load config
var config = require('../config/config');

//Load the async module
var async = require('async');

//Load the rethinkdb module
var r = require('rethinkdb');

//Variable for connection data to the database
var connection = null;


//Exporting the database query functions
module.exports = {
    initDB,
    insertData
};

//Initialize DB -> Called one time on server start
//async.waterfall([]) executes all defined function in a row
//The connection variable must be given to the other functions with callback()
function initDB(){
    async.waterfall([
        function (callback) {
            r.connect(config.rethinkdb, function (err, conn) {
                if (err){
                    console.log('Failed to connect to the database');
                    //throw err;
                }
                connection = conn;
                callback(null,connection);
            });
        },function (connection, callback) {
            r.dbCreate('finalPrototype').run(connection, function(err, result){
                if(err) {
                    console.log("Database already created");
                } else {
                    console.log("Created new database: finalPrototype");
                    console.log(JSON.stringify(result, null, 2));
                }

                callback(null, connection);
            });
        },function (connection, callback) {
            r.db('finalPrototype').tableCreate('finalTable').run(connection, function(err, result) {
                if (err) {
                    console.log("Table already created");
                }else{
                    console.log("Created new table: finalPrototype");
                    console.log(JSON.stringify(result, null, 2));
                }

                callback(null,'###### Database is ready ######');
            });
        }
    ],function (err, status) {
        if (err) throw err;
        else console.log(status);
    });
}

function insertData(name,age){
    async.waterfall([
        function (callback) {
            r.connect(config.rethinkdb, function (err, conn) {
                if (err){
                    console.log('Failed to connect to the database');
                    //throw err;
                }
                connection = conn;
                callback(null,connection);
            });
        },function (connection, callback) {
            r.db('finalPrototype').table('finalTable').insert({
                name: name,
                alter: age
            }).run(connection, function(err, result) {
                if (err) throw err;
                console.log(JSON.stringify(result, null, 2));
            });
            callback(null, '++ Data successfully added ++')
        }
    ],function (err, status) {
        if (err) throw err;
        else console.log(status);
    });
}