/**
 * Created by Rötzer on 16.11.2016.
 */

//const db = require('../models/db');
module.exports = {
    indexAction,
    sendCSS
};

//Call index page
function indexAction (req, res) {
    res.render('index', {
        title: 'RVP Main Page'
    });
}

function sendCSS (req, res) {
    res.render('views/foundation/css/foundation.css', {
        //title: 'RVP Main Page'
    });
}

