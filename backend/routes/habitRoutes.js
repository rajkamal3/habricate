const express = require('express');
const habitController = require('./../controllers/habitController');
const { protect } = require('./../controllers/userController');

const { getAllHabits, createHabit } = habitController;

const router = express.Router();

router.route('/').get(protect, getAllHabits).post(createHabit);

module.exports = router;
