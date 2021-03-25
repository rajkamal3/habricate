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

    res.status(201).json({
        status: 'success',
        data: habit
    });
});

exports.updateChecklist = catchAsync(async (req, res, next) => {
    const { habitId, checked } = req.body;

    await Habit.updateOne({ 'doAtTime.0.data': { $elemMatch: { _id: habitId } } }, { $set: { 'doAtTime.0.data.$.checked': checked } });

    res.status(204).json({
        status: 'success',
        message: 'Updated successfully.'
    });
});
