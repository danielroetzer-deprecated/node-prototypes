/**
 * Created by Rötzer on 16.11.2016.
 */

//const db = require('../models/db');
module.exports = {
    indexAction,
    aboutAction,
    createAction
};

//Call index page
function indexAction (req, res) {
    //set the page title
    res.locals.title = 'Home - RVP';

    //set the active tab for the navigation bar
    res.locals.active_home = 'active';
    res.locals.active_about = '';
    res.locals.active_create = '';

    //render and deliver the index.pug file
    res.render('index');
}

function aboutAction (req, res) {
    res.locals.title = 'About Us - RVP';
    res.locals.active_home = '';
    res.locals.active_about = 'active';
    res.locals.active_create = '';

    res.render('about');
}

function createAction(req, res){
    res.locals.title = 'Create Poll - RVP';
    res.locals.active_home = '';
    res.locals.active_about = '';
    res.locals.active_create = 'active';

    res.render('create');
}

