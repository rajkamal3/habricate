const express = require('express');
const userController = require('../controllers/userController');

const { signup, login } = userController;

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);

module.exports = router;
