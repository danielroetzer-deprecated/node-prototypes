var service = new require('node-windows').Service({
    name:'Node.js Webserver',
    description: 'Webserver listening on port 80.',
    script: 'C:\\srv\\app\\index.js'
});

service.on('install',function(){
    service.start();
});

service.install();
