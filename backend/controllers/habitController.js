const Habit = require('./../models/habitModel');
const catchAsync = require('express-async-handler');

exports.getAllHabits = catchAsync(async (req, res, next) => {
    const habits = await Habit.find({});

    res.status(200).json({
        status: 'success',
        data: habits
    });
});

exports.createHabit = async (req, res, next) => {
    const habit = await Habit.create(req.body);

    res.status(201).json({
        status: 'success',
        data: habit
    });
};
