const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name.']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email.'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please enter a password.']
        }
    },
    {
        timeStamps: true
    }
);

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
