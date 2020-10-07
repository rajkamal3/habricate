const express = require('express');
const habitController = require('./../controllers/habitController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .route('/top-5-habits')
    .get(habitController.getTopFiveHabits, habitController.getAllHabits);

router.route('/habit-stats').get(habitController.getHabitStats);

router
    .route('/')
    .get(authController.protect, habitController.getAllHabits)
    .post(habitController.createHabit);
router
    .route('/:id')
    .get(habitController.getHabit)
    .patch(habitController.updateHabit)
    .delete(habitController.deleteHabit);

module.exports = router;
