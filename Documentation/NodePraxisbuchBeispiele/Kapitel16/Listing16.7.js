var fs = require('fs');
fs.open('/root/test', 'r', function (err, handle) {
    if (err) throw err;
});
