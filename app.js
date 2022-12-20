const cors = require('cors');
const express = require("express");
const profileController = require("./controllers/profileController");

const app = express();

app.use(cors());
app.use(express.json());


app.use('/profiles', profileController);

app.get('/', (req, res) => {
    console.log("hello")
    res.send(`Welcome to A Little Pepper!!`)

});

app.get('*', (req, res) => {
    res.status(404).send("Page not found :(")
});

module.exports = app;
