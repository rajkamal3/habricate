const express = require('express');
const morgan = require('morgan');
const habitRouter = require('./routes/habitRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use('/api/v1/habits/', habitRouter);
app.use('/api/v1/users/', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

app.use(globalErrorHandler);

module.exports = app;
