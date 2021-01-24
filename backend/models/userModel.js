const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name.']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: [true, 'A user must have a password.'],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password.'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords do not match.'
        }
    },
    passwordChangedAt: Date,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    photo: {
        type: String,
        default: 'defaultUser.png'
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
});

userSchema.methods.isCorrectPassword = async function (
    enteredPassword,
    dbPassword
) {
    return await bcrypt.compare(enteredPassword, dbPassword);
};

userSchema.methods.passwordChanged = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimeStamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimeStamp;
    }
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;