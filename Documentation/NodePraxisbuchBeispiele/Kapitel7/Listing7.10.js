var fs = require('fs');
var input = process.argv.pop();
fs.readFile(input, 'utf8', (err, content) => {
    if (err) {
        process.stderr.write(err);
        return false;
    }
    var all = process.argv.length === 2;
    if (all || process.argv.find(e => e === '-c' || e === '--character')) {
        var chars = content.length;
        console.log('Characters: ', chars);
    }
    if (all || process.argv.find(e => e === '-w' || e === '--word')) {
        var words = content.split(/[\t \n]/).filter(e => e !== '').length;
        console.log('Words: ', words);
    }
    if (all || process.argv.find(e => e === '-l' || e === '--line')) {
        var lines = content.split('\n').length;
        console.log('Lines: ', lines);
    }
});