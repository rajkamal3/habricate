const Habit = require('../models/habitModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getTopFiveHabits = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = 'name';
    req.query.fields = 'name,minutes';
    next();
};

exports.getAllHabits = factory.getAll(Habit);
exports.getHabit = factory.getOne(Habit, { path: 'reviews' });
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
