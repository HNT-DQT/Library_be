const express = require('express');
const router = express.Router();

const transactionController = require('../app/controllers/transaction');

router.post('/create', transactionController.createTransaction);
router.post('/update', transactionController.updateTransaction);
router.post('/delete', transactionController.deleteTransaction);
router.get('/:userslug/all', transactionController.index);
router.get('/:id', transactionController.getTransaction);

module.exports = router;