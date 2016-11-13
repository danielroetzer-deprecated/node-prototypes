var fs = require('fs');

var writeStream = fs.createWriteStream('output.txt');

writeStream.on('error', function (err) {
    console.log('err');
});
