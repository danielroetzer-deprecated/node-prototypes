var {access, readFile, R_OK} = require('fs');
access('input.txt', R_OK, function (err) {
    if (!err) {
        readFile('input.txt', 'utf-8', function (err, data) {
            console.log(data);
        }); }
});