/**
 * Created by Dani on 13.11.2016.
 */
const express = require('express');
const app = express();

//Importing the modules from the config file
const config = require("./config/config");

//Call the defined functions
console.log(config.firstFunction());
console.log(config.secondFunction());
console.log(config.sayHello());
//Build sum
console.log(config.sum(3,5));

//Call the defined values
console.log(config.values);
console.log(config.values.name);


//This will display all available objects, which are loaded from the config
app.get('/',function (req,res) {
    res.send(config);
});


//Access the port with the loaded config
app.listen(config.server.port, function () {
    console.log('Server listening on port: '+config.server.port);
});

