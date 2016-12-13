/**
 * Created by Dani on 13.11.2016.
 */

//Exporting various modules in different ways
module.exports = {
    firstFunction : function () {
        return "Return of the first function";
    },secondFunction: function () {
        return "Return of the second function";
    },server: {
        "host":"localhost",
        "port":3000
    },values: {
        "name":"Daniel",
        "location":"Melk",
        "number":"06603448790"
    },
    //This method of calling the functions is possible with
    //the Javascript version: ECMAScript 6
    sayHello,
    sum
};


function sum(number1,number2){
    const result = number1 + number2;
    return "" + number1 + " + " + number2 + " = " + result;
}

function sayHello(){
    return "Hello, fellow user";
}

