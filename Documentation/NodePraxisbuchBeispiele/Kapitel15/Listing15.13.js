var fs = require('fs');

var writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello\n');
writeStream.cork();
writeStream.write('World\n');
setTimeout(function () {
    writeStream.uncork();
    writeStream.write('!');
    writeStream.end();
}, 5000);
