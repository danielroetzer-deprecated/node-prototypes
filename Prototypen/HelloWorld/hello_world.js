/*
################
	Hello World with Express.js
################

*/

//Calling express
var express = require('express')
var app = express()

//Create server and display Hello World when called
//reg = request, res = response
app.get('/', function (req, res) {
	res.send('Hello World!')
})

//Different routing path, call it with localhost:3000/secret
app.get('/secret', function (req, res) {
	res.send('Shhhh! This is the secret place')
})

//Setting server to listen to localhost:3000
//localhost or 127.0.0.1 is default
app.listen(3000, function () {
	//This text is displayed, when the server has been succesfully started
	console.log('Hello World Server listening on localhost:3000!')
})

/*
###############

	Hello World without Express.js

###############
	
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at localhost:3000');
});

*/