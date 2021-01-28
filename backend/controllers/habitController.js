const Habit = require('./../models/habitModel');

exports.getAllHabits = (req, res, next) => {
    res.send('Here are the habits');
};

exports.createHabit = async (req, res, next) => {
    const habit = await Habit.create(req.body);

    console.log(habit);

    res.status(201).json({
        status: 'success',
        data: habit
    });
};
