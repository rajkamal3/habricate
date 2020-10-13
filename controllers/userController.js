const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./../controllers/handlerFactory');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};

    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });

    return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        results: users.length,
        tours: {
            users
        }
    });
});

exports.updateAccountDetails = catchAsync(async (req, res, next) => {
    // 1) Create an error if user tries to update password
    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('You can not update password here.', 400));
    }

    // 2) Filter out the fields that should not be updated
    const filteredBody = filterObj(req.body, 'name', 'email');

    // 3) Update user details
    const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        filteredBody,
        {
            new: true,
            runValidators: true
        }
    );

    res.status(200).json({
        status: 'success',
        user: updatedUser
    });
});

exports.deleteMyAccount = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
        status: 'success',
        data: null
    });
});

exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
