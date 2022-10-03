const express = require('express');
const router = express.Router();
const authorization = require('../middlewares/authorization');

const accountController = require('../app/controllers/account.controller');

router.post('/login', accountController.login);
router.post('/create', accountController.createUser);
router.post('/createLibrarian', authorization.verifyAdmin, accountController.createLibrarian);
router.get('/logout', accountController.logout);
router.post('/change-password', accountController.changePassword);
router.post('/update-profile', accountController.updateProfile);
router.post('/lock-user', authorization.verifyLibrarian, accountController.lockUser);
router.get('/profile', accountController.getProfile);

module.exports = router;