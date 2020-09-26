const fs = require('fs');

const habits = JSON.parse(
    fs.readFileSync(`${__dirname}/../devData/habits.json`)
);

exports.getAllHabits = (req, res) => {
    res.status(200).json({
        status: 'success',
        tours: {
            habits
        }
    });
};

exports.getHabit = (req, res) => {
    const habitId = req.params.id * 1;
    const habit = habits.find(el => {
        return el.id === habitId;
    });

    res.status(200).json({
        status: 'success',
        habit: habit
    });
};

exports.createHabit = (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: 'success',
        habit: req.body
    });
};
