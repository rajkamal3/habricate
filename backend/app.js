const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const habitRoutes = require('./routes/habitRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config({
    path: `${__dirname}/config.env`
});

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
}

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

app.use('/api/v1/habits', habitRoutes);
app.use('/api/v1/users', userRoutes);

// Serve statis files in prod environment
if (process.env.NODE_ENV === 'prod') {
    // Set static folder
    app.use(express.static('./../frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../frontend/build/index.html`));
    });
}

const port = 3000;

app.listen(port || 3000, () => {
    console.log(`App running on port ${port}`);
});
