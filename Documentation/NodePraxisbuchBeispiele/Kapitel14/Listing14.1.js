var fs = require('fs');
console.log('Operation 1');
var content = fs.readFileSync('input.txt', 'utf-8');
console.log('Operation 2');
console.log('Content: ', content);
console.log('Operation 3');

