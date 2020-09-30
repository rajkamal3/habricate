const Habit = require('./../models/habitModel');

exports.getAllHabits = async (req, res) => {
    try {
        console.log(req.query);
        // Build query

        // 1) Filtering
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        // 2) Advanced filtering
        let queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(
            /\b(gt|gte|lt|lte)\b/g,
            match => `$${match}`
        );

        let query = Habit.find(JSON.parse(queryString));

        // 3) Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('name');
        }

        // 4) Limiting
        if (req.query.fields) {
            const limitBy = req.query.fields.split(',').join(' ');
            query = query.select(limitBy);
        } else {
            query = query.select('-__v');
        }

        // Execute query
        const habits = await query;

        res.status(200).json({
            status: 'success',
            results: habits.length,
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
