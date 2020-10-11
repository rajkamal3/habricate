const Habit = require('./../models/habitModel');
const APIFeatures = require('./../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getTopFiveHabits = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = 'name';
    req.query.fields = 'name,minutes';
    next();
};

exports.getAllHabits = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Habit.find(), req.query)
        .filter()
        .sort()
        .limit()
        .paginate();

    const habits = await features.query.populate('reviews');

    res.status(200).json({
        status: 'success',
        results: habits.length,
        data: {
            habits
        }
    });
});

exports.getHabit = catchAsync(async (req, res, next) => {
    const habit = await Habit.findById(req.params.id).populate('reviews');

    if (!habit) {
        return next(new AppError(`No habit with that ID`, 404));
    }

    res.status(200).json({
        status: 'success',
        habit: habit
    });
});

exports.createHabit = catchAsync(async (req, res, next) => {
    const newHabit = await Habit.create(req.body);

    res.status(201).json({
        status: 'success',
        habit: newHabit
    });
});

exports.updateHabit = catchAsync(async (req, res, next) => {
    const updatedHabit = await Habit.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!updatedHabit) {
        return next(new AppError(`No habit with that ID`, 404));
    }

    res.status(201).json({
        status: 'success',
        habit: updatedHabit
    });
});

exports.deleteHabit = catchAsync(async (req, res, next) => {
    const habit = await Habit.findByIdAndDelete(req.params.id);

    if (!habit) {
        return next(new AppError(`No habit with that ID`, 404));
    }

    res.status(201).json({
        status: 'success'
    });
});

exports.getHabitStats = catchAsync(async (req, res, next) => {
    const stats = await Habit.aggregate([
        {
            $match: { goal: { $gte: 5 } }
        },
        {
            $group: {
                _id: null,
                numHabits: { $sum: 1 },
                avgGoal: { $avg: '$goal' }
            }
        }
    ]);

    res.status(200).json({
        status: 'success',
        data: {
            stats: stats
        }
    });
});
