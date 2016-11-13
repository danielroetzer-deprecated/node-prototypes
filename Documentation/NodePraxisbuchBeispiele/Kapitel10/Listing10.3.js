var jade = require('jade');

var template = 'h1 Hello Jade';

var output = jade.render(template);

console.log(output);