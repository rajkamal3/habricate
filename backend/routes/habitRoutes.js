const express = require('express');
const habitController = require('./../controllers/habitController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

router.use('/:habitId/reviews', reviewRouter);

router
    .route('/top-5-habits')
    .get(habitController.getTopFiveHabits, habitController.getAllHabits);

router.route('/habit-stats').get(habitController.getHabitStats);

router
    .route('/')
    .get(habitController.getAllHabits)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        habitController.createHabit
    );

router
    .route('/:id')
    .get(habitController.getHabit)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        habitController.updateHabit
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        habitController.deleteHabit
    );

module.exports = router;
