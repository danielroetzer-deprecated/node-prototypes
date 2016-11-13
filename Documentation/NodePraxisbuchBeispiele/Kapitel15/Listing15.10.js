var fs = require('fs');

var writeStream = fs.createWriteStream('output.txt');

var data = ['Hallo', 'Welt'];

data.forEach(function (item) {
    writeStream.write(item + '\n');
});

writeStream.end(null);
