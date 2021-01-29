const Habit = require('./../models/habitModel');

exports.getAllHabits = async (req, res, next) => {
    try {
        const habits = await Habit.find({});

        res.status(200).json({
            status: 'success',
            data: habits
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            data: error
        });
    }
};

exports.createHabit = async (req, res, next) => {
    const habit = await Habit.create(req.body);

    console.log(habit);

    res.status(201).json({
        status: 'success',
        data: habit
    });
};
