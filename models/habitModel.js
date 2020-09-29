const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A habit must have a name!'],
        unique: true
    },
    repeat: {
        type: Date,
        required: [true, 'A habit must have a repeat!']
    },
    doAt: {
        type: String,
        required: [true, 'A habit must be done at a specific time!']
    },
    goal: Number,
    goalUnits: String,
    reminder: Boolean
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
