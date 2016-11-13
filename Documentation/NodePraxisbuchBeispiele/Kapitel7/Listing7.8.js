process.stdin.on('readable', () => {
    var data = process.stdin.read();
process.stdout.write(`Data: ${data}`);
});