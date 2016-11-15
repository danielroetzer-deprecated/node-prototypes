/*
################
	Hello World with Express.js
################

*/

//Calling express
const express = require('express');
const app = express();


//reg = request, res = response
app.get('/', function (req, res) {
    //Display Hello World
	res.send('Hello World!')
});

//Different routing path, call it with localhost:3000/secret
app.get('/secret', function (req, res) {
	res.send('Shhhh! This is the secret place')
});

//Setting server to listen to localhost:3000
//localhost = 127.0.0.1 is default
app.listen(3000, function () {
	//This text is displayed, when the server has been successfully started
	console.log('Hello World Server listening on localhost:3000!')
});

