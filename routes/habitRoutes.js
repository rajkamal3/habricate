const express = require('express');
const habitController = require('./../controllers/habitController');

const router = express.Router();

router
    .route('/')
    .get(habitController.getAllHabits)
    .post(habitController.createHabit);
router
    .route('/:id')
    .get(habitController.getHabit)
    .patch(habitController.updateHabit)
    .delete(habitController.deleteHabit);

module.exports = router;
