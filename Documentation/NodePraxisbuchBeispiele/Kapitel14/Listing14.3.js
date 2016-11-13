var exec = require('child_process').exec,
    cmd = 'find /usr/local -iname "node"';
exec(cmd, function (err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
});
