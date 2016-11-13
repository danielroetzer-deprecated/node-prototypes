var express = require('express');
var router = express.Router();
var app = express();

router.get('/groups', function (req, res) {
    res.send('Groups');
});
router.get('/permissions', function (req, res) {
    res.send('Permissions');
});

app.use('/user', router);

app.listen(8080);