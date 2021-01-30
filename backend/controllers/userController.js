const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createAndSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);

    //Remove password from output
    user.password = undefined;

    res.status(statusCode).json({
        status: 'Success',
        token,
        data: {
            user
        }
    });
};

exports.signup = async (req, res, next) => {
    const { email, password, name, isAdmin } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({
            status: 'fail',
            message: 'User with the same email already exists.'
        });
    } else {
        const user = await User.create({ name, email, password, isAdmin });

        // res.status(201).json({
        //     status: 'success',
        //     data: user
        // });

        createAndSendToken(user, 201, res);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            status: 'success',
            data: user
        });
    } else {
        res.status(400).json({
            status: 'fail',
            data: 'Incorrect email/password.'
        });
    }
};
