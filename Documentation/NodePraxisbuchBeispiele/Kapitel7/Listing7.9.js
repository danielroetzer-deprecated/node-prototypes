var readline = require('readline');
var fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please specify the filename: ', input => {
    console.log(input);
    fs.readFile(input, 'utf8', (err, content) => {
        var chars = content.length;
        var words = content.split(/[\t \n]/).filter(e => e !== '').length;
        var lines = content.split('\n').length;
        console.log('Characters: ', chars);
        console.log('Words: ', words);
        console.log('Lines: ', lines);
        process.exit();
    });
});