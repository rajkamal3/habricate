const Habit = require('./../models/habitModel');

exports.getAllHabits = async (req, res) => {
    try {
        const habits = await Habit.find(req.query);

        res.status(200).json({
            status: 'success',
            data: {
                habits
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getHabit = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            habit: habit
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createHabit = async (req, res) => {
    try {
        const newHabit = await Habit.create(req.body);

        res.status(201).json({
            status: 'success',
            habit: newHabit
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        });
    }
};

exports.updateHabit = async (req, res) => {
    try {
        const updatedHabit = await Habit.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(201).json({
            status: 'success',
            habit: updatedHabit
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteHabit = async (req, res) => {
    try {
        await Habit.findByIdAndDelete(req.params.id);

        res.status(201).json({
            status: 'success'
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
