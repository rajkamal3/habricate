const express = require('express');
const habitController = require('./../controllers/habitController');
const { protect } = require('./../controllers/userController');

const { createHabit, getMyHabits, getAllHabits, getSingleHabit, updateChecklist } = habitController;

const router = express.Router();

router.route('/').get(protect, getAllHabits).post(createHabit);
router.route('/myHabits').get(protect, getMyHabits).post(createHabit).patch(updateChecklist);
router.route('/:id').get(protect, getSingleHabit);

module.exports = router;
