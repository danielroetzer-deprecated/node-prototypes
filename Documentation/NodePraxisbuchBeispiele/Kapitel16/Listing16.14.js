var fs = require('fs');
fs.stat('error.log', function (err, stat) {
    showPerms(err, stat);
    fs.chmod('error.log', 0777, function (err) {
        fs.chown('error.log', 0, 0, function (err) {
            fs.stat('error.log', showPerms);
        }); });
});
showPerms = function (err, stat) {
    console.log('User: ' + stat.uid);
    console.log('Gruppe: ' + stat.gid);
    console.log('Permissions: ' + stat.mode.toString(8));
};
