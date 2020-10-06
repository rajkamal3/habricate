const express = require('express');
const morgan = require('morgan');
const habitRouter = require('./routes/habitRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use('/api/v1/habits/', habitRouter);
app.use('/api/v1/users/', userRouter);

app.all('*', (req, res, next) => {
    const err = new Error(`Cen't find ${req.originalUrl} on this server!`);
    err.status = 'fail';
    err.statusCode = 404;

    next(err);
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 500;

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

module.exports = app;
