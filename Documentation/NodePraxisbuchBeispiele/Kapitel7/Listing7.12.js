require('http').createServer(function (req, res) {
    res.end('Hello World');
}).listen(8080);
process.on('SIGINT', (e) => {
    console.log('...exiting');
    process.exit();
});