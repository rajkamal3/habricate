const Review = require('./../models/reviewModel');
const factory = require('./../controllers/handlerFactory');

exports.setHabitUserIds = (req, res, next) => {
    // Allow nested routes
    if (!req.body.habit) req.body.habit = req.params.habitId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
