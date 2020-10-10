const express = require('express');
const morgan = require('morgan');
const habitRouter = require('./routes/habitRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express();

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests. Please try again later.'
});

app.use('/api', limiter);

app.use(mongoSanitize());

app.use(xss());

app.use('/api/v1/habits/', habitRouter);
app.use('/api/v1/users/', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

app.use(globalErrorHandler);

module.exports = app;
