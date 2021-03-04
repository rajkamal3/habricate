const Habit = require('./../models/habitModel');
const catchAsync = require('express-async-handler');

exports.createHabit = async (req, res, next) => {
    const habit = await Habit.create(req.body);

    res.status(201).json({
        status: 'success',
        data: habit
    });
};

exports.getMyHabits = async (req, res, next) => {
    const habits = await Habit.find({ user: req.user._id });

    res.status(201).json({
        status: 'success',
        data: habits
    });
};

exports.getAllHabits = catchAsync(async (req, res, next) => {
    const habits = await Habit.find({});

    res.status(200).json({
        status: 'success',
        data: habits
    });
});

exports.getSingleHabit = catchAsync(async (req, res, next) => {
    const habit = await Habit.findById(req.params.id);

    console.log(Date());

    res.status(201).json({
        status: 'success',
        data: habit
    });
});
