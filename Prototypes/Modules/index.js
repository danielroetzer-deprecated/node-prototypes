/**
 * Created by Dani on 13.11.2016.
 */

//Importing the modules from the config file
var config = require("./config/config");

//Call the defined functions
console.log(config.firstFunction());
console.log(config.secondFunction());
console.log(config.thirdfunction(3,5));
console.log(config.hello());
//Call the defined values
console.log(config.values);
console.log(config.values.name);