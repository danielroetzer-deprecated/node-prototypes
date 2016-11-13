var fs = require('fs');
fs.stat('myFile.txt', function (err, stat) {
    console.log('User: ' + stat.uid);
    console.log('Gruppe: ' + stat.gid);
    console.log('Permissions: ' + stat.mode.toString(8));
});
