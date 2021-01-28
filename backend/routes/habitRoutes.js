const express = require('express');
const habitController = require('./../controllers/habitController');

const { getAllHabits } = habitController;

const router = express.Router();

router.route('/').get(getAllHabits);

module.exports = router;
