const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name.'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please enter your email.'],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Please enter a password.'],
            minlength: 8,
            select: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const user = new mongoose.model('user', userSchema);

module.exports = user;
