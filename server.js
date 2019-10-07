const express = require('express');
const app = express();
const words = require('./words.json');

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.render('index', {
        title: "Word list",
        words: words["word-list"]
    });
});

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// use pug
app.set("view engine", "pug");
