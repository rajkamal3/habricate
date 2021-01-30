const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema(
    {
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
        doAtTime: [
            {
                type: String
            }
        ],
        doAtPlace: {
            type: String
        },
        dailyTarget: {
            type: String
        },
        dailyTargetUnit: {
            type: String
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true
    }
);

habitSchema.virtual('averageGoal').get(function () {
    return parseInt(this.dailyTarget) / this.doAtTime.length;
});

const habit = new mongoose.model('habit', habitSchema);

module.exports = habit;
