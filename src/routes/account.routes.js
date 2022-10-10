const express = require('express');
const router = express.Router();
const authz = require('../middlewares/authorization');

const accountController = require('../app/controllers/account.controller');

router.post('/login', accountController.login);
router.post('/create', accountController.createUser);
router.post('/create-librarian', authz.verifyAdmin, accountController.createLibrarian);
router.get('/get-all-users', authz.verifyLibrarian, accountController.getAllUser);
router.get('/get-all-librarians', authz.verifyAdmin, accountController.getAllLibrarian);
router.get('/logout', accountController.logout);
router.get('/logout', accountController.logout);
router.post('/change-password', accountController.changePassword);
router.post('/update-profile', accountController.updateProfile);
router.get('/lock-user', authz.verifyLibrarian, accountController.lockUser);
router.get('/profile', accountController.getProfile);

module.exports = router;