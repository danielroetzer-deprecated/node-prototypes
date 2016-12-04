/**
 * Created by Rötzer on 14.11.2016.
 */

//Load config
const config = require('../config/config');

//Load the async module
const async = require('async');

//Load the RethinkDB module
const r = require('rethinkdb');



//Exporting the database query functions
module.exports = {
    initDB,
    insertTestData
};

//Initialize DB -> Called one time on server start
//async.waterfall([function(){],function(){},...) executes all defined function in a row
//The connection variable must be given to the other functions with callback()
function initDB(){
    async.waterfall([
        function (callback) {
            r.connect(config.rethinkdb, function (err, connection) {
                if (err){
                    console.log('Failed to connect to the database');
                    //throw err;
                }
                callback(null,connection);
            });
        },function (connection, callback) {
            r.dbCreate('rethinkdb_prototype').run(connection, function(err, result){
                if(err) {
                    console.log("Database already created");
                } else {
                    console.log("Created new database: rethinkdb_prototype");
                    console.log(JSON.stringify(result, null, 2));
                }

                callback(null, connection);
            });
        },function (connection, callback) {
            r.db('rethinkdb_prototype').tableCreate('protoTable').run(connection, function(err, result) {
                if (err) {
                    console.log("Table already created");
                }else{
                    console.log("Created new table: protoTable");
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

function insertTestData(){
    async.waterfall([
        function (callback) {
            r.connect(config.rethinkdb, function (err, connection) {
                if (err){
                    console.log('Failed to connect to the database');
                    //throw err;
                }
                callback(null,connection);
            });
        },function (connection, callback) {
            r.db('rethinkdb_prototype').table('protoTable').insert({
                name: 'Daniel',
                age: 20,
            }).run(connection, function(err, result) {
                if (err) throw err;
                console.log(JSON.stringify(result, null, 2));
            });
            callback(null, '++ test data successfully added')
        }
    ],function (err, status) {
        if (err) throw err;
        else console.log(status);
    });
}



//The code above is hard to understand at first sight
//The code below is basically the same thing as the function initDB()
//At the end of every function, the next function is automatically executed
//The callback delivers specified values, which are needed for the next function

 function connectDB() {
    r.connect(config.rethinkdb, function (err, connection) {
        if (err) throw err;
        createTable(connection);
    });
 }

 function createTable(connection){
     r.db('test').tableCreate('authors').run(connection, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
     });
 }