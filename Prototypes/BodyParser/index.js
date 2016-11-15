/**
 * Created by Rötzer on 14.11.2016.
 */


const express = require('express');
const app = express();

//Load body-parser module and initialize it
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Defines the route, in which the static files like html,css, etc. are found
//Calling localhost:3000 will open the index.html in the view directory
app.use(express.static(__dirname + '/views'));


//
app.post('/',function (req,res) {
    //Get variable from the form
    const userName = req.body.userName;
    //Create a little html, with the variable included
    const html = 'Hello: ' + userName + '.<br>' +
                 '<a href="/">Try again.</a>';

    //Send it
    res.send(html);
});

app.listen(3000,function () {
    console.log('Server listening on port 3000');
});