const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/account');

router.post('/login', accountController.login);
router.post('/create', accountController.create);
router.get('/logout', accountController.logout);
router.post('/change-password', accountController.changePassword);
router.post('/update-profile', accountController.updateProfile);
router.post('/lock-user', accountController.updateProfile);
router.get('/:slug/cart', accountController.getCart);
router.get('/:slug', accountController.index);

module.exports = router;