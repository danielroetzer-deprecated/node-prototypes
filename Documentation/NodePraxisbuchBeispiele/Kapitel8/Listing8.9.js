var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
http.createServer(function(req, res) {
    if (req.url === '/') {
        res.setHeader('content-type', 'text/html');
        res.end('<form action="/upload" method="post" enctype="multipart/form-data">' +
        '<input type="file" name="upload">' +
        '<input type="submit" name="submit" value="submit">' +
        '</form>')
    } else if (req.url === '/upload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            fs.rename(files.upload.path, files.upload.name, function (e) {
                var result = 'Upload successful';
                if (e) {
                    result = 'Upload failed';
                }
                res.end(result);
            });
        }); }
}).listen(8080, 'localhost');