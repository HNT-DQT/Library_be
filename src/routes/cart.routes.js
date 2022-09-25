const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/cart.controller');

router.post('/create', cartController.createCart);
router.post('/update', cartController.updateCart);
router.get('/delete', cartController.deleteCart);
router.get('/', cartController.getCart);

module.exports = router;