const express = require('express');
const habitController = require('./../controllers/habitController');

const { getAllHabits, createHabit } = habitController;

const router = express.Router();

router.route('/').get(getAllHabits).post(createHabit);

module.exports = router;
