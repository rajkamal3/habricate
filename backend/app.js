const express = require('express');
const mongoose = require('mongoose');
// const schedule = require('node-schedule');
const cron = require('node-cron');
const Habit = require('./models/habitModel');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const habitRoutes = require('./routes/habitRoutes');
const userRoutes = require('./routes/userRoutes');

const store = require('store2');

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

/**
 * TEMP
 */

// const job = schedule.scheduleJob('*/30 * * * * *', function () {
//     console.log(Math.floor(Math.random() * 10));
// });
// var job = CronJob(
//     '00 00 12 * * 0-6',
//     function () {
//         /*
//          * Runs every day
//          * at 12:00:00 AM.
//          */
//         console.log(`Hey I did somethin'!`);
//     },
//     function () {
//         /* This function is executed when the job stops */
//     },
//     true /* Start the job right now */,
//     {
//         /* Time zone of this job. */
//         timeZone: 'Asia/Kolkata'
//     }
// );
cron.schedule(
    // '0 0 * * *',
    '*/3 * * * * *',
    async () => {
        // console.log('Runs everyday at 12:00 AM at Asia/Kolkata timezone ' + Math.floor(Math.random() * 10));
        // const habits = await Habit.find({ user: store.user._id });
        // console.log(habits);
    },
    {
        scheduled: true,
        timezone: 'Asia/Kolkata'
    }
);

/**
 * TEMP
 *
 */

app.use('/api/v1/habits', habitRoutes);
app.use('/api/v1/users', userRoutes);

if (process.env.NODE_ENV === 'prod') {
    app.use(express.static(`${__dirname}/../frontend/build`));
    app.get('/*', (req, res) => res.sendFile(path.resolve(`${__dirname}/../frontend/build/index.html`)));
} else {
    app.get('/', (req, res) => {
        res.send(`I'm a freakin' server!`);
    });
}

const port = 3000;

app.listen(process.env.PORT || port || 3000, () => {
    console.log(`App running on port ${port}`);
});
