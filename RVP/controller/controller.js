/**
 * Created by Rötzer on 16.11.2016.
 */

//const db = require('../models/db');
module.exports = {
    indexAction,
    aboutAction,
    placeholderAction
};

//Call index page
function indexAction (req, res) {
    res.locals.title = 'Home - RVP';
    res.render('index');
}

function aboutAction (req, res) {
    res.render('about', {
        title: 'About Us - RVP'
    });
}

function placeholderAction(req, res){
    res.render('placeholder', {
        title: 'Placeholder - RVP'
    });
}

