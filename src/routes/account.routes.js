const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/account.controller');

router.post('/login', accountController.login);
router.post('/create', accountController.createUser);
router.post('/createLibrarian', accountController.createLibrarian);
router.get('/logout', accountController.logout);
router.post('/change-password', accountController.changePassword);
router.post('/update-profile', accountController.updateProfile);
router.post('/lock-user', accountController.lockUser);
router.get('/profile', accountController.getProfile);

module.exports = router;