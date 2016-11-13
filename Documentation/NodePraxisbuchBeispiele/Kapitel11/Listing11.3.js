var http = require('http'),
    mysql = require('mysql'),
    util = require('util'),
    querystring = require('querystring');

var AddressBook = function () {
    this.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        database : 'addressbook',
        password : ''
    });
    this.connection.connect();
    http.createServer(this.dispatcher.bind(this)).listen(8080, 'localhost');
};