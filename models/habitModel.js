const mongoose = require('mongoose');
const slugify = require('slugify');

const habitSchema = new mongoose.Schema(
    {
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
        slug: String,
        difficulty: {
            type: String,
            required: [true, 'A habit must have a difficulty']
        },
        repeat: {
            type: Date,
            required: [true, 'A habit must have a repeat!'],
            enum: {
                values: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ],
                message: 'Repeat should be a day'
            }
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
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
);

habitSchema.virtual('goalSeconds').get(function () {
    return this.goal * 60;
});

habitSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'habit',
    localField: '_id'
});

habitSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
