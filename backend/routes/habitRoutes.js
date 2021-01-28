const express = require('express');
const habitController = require('./../controllers/habitController');

const router = express.Router();

router.route('/').get(habitController.getAllHabits);

module.exports = router;
