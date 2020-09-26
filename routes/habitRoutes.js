const express = require('express');
const habitController = require('./../controllers/habitController');

const router = express.Router();

router.param('id', habitController.checkId);

router.route('/').get(habitController.getAllHabits);
router.route('/:id').get(habitController.getHabit);

module.exports = router;
