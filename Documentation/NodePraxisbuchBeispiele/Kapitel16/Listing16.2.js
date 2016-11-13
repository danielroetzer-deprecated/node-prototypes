var fs = require('fs');

fs.stat('./input.txt', function (err, stat) {
    console.log(stat);
});

fs.access('./input.txt', fs.R_OK, function (err) {
    if (!err) {
        console.log('file is readable');
    }
});
