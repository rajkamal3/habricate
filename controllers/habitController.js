const Habit = require('./../models/habitModel');
const APIFeatures = require('./../utils/apiFeatures');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

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

exports.createHabit = factory.createOne(Habit);
exports.updateHabit = factory.updateOne(Habit);
exports.deleteHabit = factory.deleteOne(Habit);

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
