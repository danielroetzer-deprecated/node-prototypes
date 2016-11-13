var execFile = require('child_process').execFile;
execFile('./input.sh', function (err, stdout, stderr) {
    console.log(stdout);
});
