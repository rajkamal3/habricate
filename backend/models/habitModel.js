const mongoose = require('mongoose');

const habitSchema = mongoose.Model({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Habit name is mandatory'],
        trim: true
    }
});

const user = new mongoose.Schema('habit', habitSchema);

module.exports = user;
