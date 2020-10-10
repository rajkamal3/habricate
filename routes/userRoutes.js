const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
    '/changePassword',
    authController.protect,
    authController.changePassword
);
router.patch(
    '/updateAccountDetails',
    authController.protect,
    userController.updateAccountDetails
);

router.route('/').get(userController.getAllUsers);

module.exports = router;
