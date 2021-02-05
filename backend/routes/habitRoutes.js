const express = require('express');
const habitController = require('./../controllers/habitController');
const { protect } = require('./../controllers/userController');

const { createHabit, getMyHabits, getAllHabits, getSingleHabit } = habitController;

const router = express.Router();

router.route('/').get(protect, getAllHabits).post(createHabit);
router.route('/myHabits').get(protect, getMyHabits).post(createHabit);
router.route('/:id').get(protect, getSingleHabit);

module.exports = router;
