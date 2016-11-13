var fs = require('fs');

var read = fs.createReadStream('input.txt');

var write = fs.createWriteStream('output.txt');

read.pipe(write);
