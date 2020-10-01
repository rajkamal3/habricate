const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    name: {
        type: String,
        required: [true, 'A habit must have a name!'],
        unique: true
    },
    difficulty: {
        type: String,
        required: [true, 'A habit must have a difficulty']
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
    reminder: {
        type: Boolean,
        default: false
    }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
