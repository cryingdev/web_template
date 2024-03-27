const express = require('express');
const fs = require('fs');
const app = express();

// Set the views directory to "views"
app.set('views', './views');

// Set the view engine to "html"
app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(err);
        return callback(null, content.toString());
    });
});
app.set('view engine', 'html');

// Define your routes here
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/views/newWeb.html');
});

app.use(express.static('public'));

module.exports = app;

/*
    Importing the necessary modules (Express and fs).
    Creating an instance of the Express app.
    Setting the views directory to './views' using app.set('views', './views').
    Setting the view engine to 'html' using app.set('view engine', 'html').
    Defining a custom view engine using app.engine('html', ...). This engine reads an HTML file and returns it as a string.
    Defining a route for the homepage using app.get('/'). When a user visits the homepage, we send the index.html file using res.sendFile(__dirname + '/views/index.html').
    Exporting the app object using module.exports.
*/