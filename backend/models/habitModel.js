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
            required: [true, 'Habit name is mandatory.'],
            trim: true
        },
        doAtTime: [
            {
                date: {
                    type: Date,
                    default: Date.now()
                },
                data: [
                    {
                        checked: {
                            type: Boolean,
                            default: false
                        },
                        time: String
                    }
                ],
                _id: false
            }
        ],
        doAtPlace: {
            type: String,
            required: [true, 'Please enter the place you do this.']
        },
        dailyTarget: {
            type: Number
        },
        dailyTargetUnit: {
            type: String
        },
        reminder: {
            type: Boolean
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true
    }
);

habitSchema.virtual('averageGoal').get(function () {
    return this.dailyTarget / this.doAtTime.length;
});

const habit = new mongoose.model('habit', habitSchema);

module.exports = habit;
