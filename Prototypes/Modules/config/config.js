/**
 * Created by Dani on 13.11.2016.
 */

//Exporting 4 different selfmade modules
module.exports = {
    firstFunction : function () {
        return "Return of the first function";
    },secondFunction: function () {
        return "Return of the second function";
    },thirdfunction: function(number1,number2){
        var result = number1*number2;
        return "" + number1 + " * " + number2 + " = " + result;
    },values: {
        "name":"Daniel",
        "location":"Melk",
        "number":"06603448790"
    },hello
};

function hello(){
    return "hello";
}