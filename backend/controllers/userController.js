const User = require('../models/userModel');

exports.signup = async (req, res, next) => {
    const { email, password, name } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({
            status: 'fail',
            message: 'User with the same email already exists.'
        });
    } else {
        const user = await User.create({ name, email, password });

        res.status(201).json({
            status: 'success',
            data: user
        });
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
