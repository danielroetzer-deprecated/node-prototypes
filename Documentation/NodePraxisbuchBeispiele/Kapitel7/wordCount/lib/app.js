var input = 'Hello World\nHow are  you?';
var chars = input.length;
var words = input.split(/[\t \n]/).filter(e => e !== '').length;
var lines = input.split('\n').length;
console.log('Characters: ', chars);
console.log('Words: ', words);
console.log('Lines: ', lines);