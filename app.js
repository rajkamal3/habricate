const express = require('express');
const morgan = require('morgan');
const habitRouter = require('./routes/habitRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from the middleware!');
    next();
});

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/habits/', habitRouter);
app.use('/api/v1/users/', userRouter);

module.exports = app;
