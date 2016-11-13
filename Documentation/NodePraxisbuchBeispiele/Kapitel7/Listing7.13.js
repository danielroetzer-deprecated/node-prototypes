var fs = require('fs');
var program = require('commander');
program
    .version('0.0.1')
    .option('-c, --character', 'Count characters')
    .option('-w, --word', 'Count words')
    .option('-l, --line', 'Count lines')
    .parse(process.argv);
var input = process.argv.pop();
fs.readFile(input, 'utf8', (err, content) => {
    if (err) {
        process.stderr.write(err);
        return false;
    }
    var all = process.argv.length === 2;
    if (all || program.character) {
        var chars = content.length;
        console.log('Characters: ', chars);
    }
    if (all || program.word) {
        var words = content.split(/[\t \n]/).filter(e => e !== '').length;
        console.log('Words: ', words);
    }
    if (all || program.line) {
        var lines = content.split('\n').length;
        console.log('Lines: ', lines);
    }
});