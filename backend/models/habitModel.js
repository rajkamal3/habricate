const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Habit name is mandatory'],
        trim: true
    },
    doAt: {
        type: Date
    },
    target: {
        type: String
    },
    targetUnit: {
        type: String
    },
    lastSevenDays: {
        type: String,
        enum: [false, false, false, false, false, false, false]
    }
});

const habit = new mongoose.model('habit', habitSchema);

module.exports = habit;
