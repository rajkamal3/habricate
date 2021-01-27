const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/config.env`
});

const app = express();

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log(`Database connection successful.`);
    });

app.get('/', (req, res) => {
    res.send(`I'm a freakin' server!`);
});

const port = 3000;

app.listen(port || 3000, (req, res, next) => {
    console.log(`App running on port 3000`);
});
