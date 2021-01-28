const mongoose = require('mongoose');

const habitSchema = mongoose.Model({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const user = new mongoose.Schema('habit', habitSchema);

module.exports = user;
