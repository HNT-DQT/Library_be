const express = require('express');
const router = express.Router();
const authz = require('../middlewares/authorization');

const txnController = require('../app/controllers/transaction.controller');

router.post('/online-create', authz.verifyUser, txnController.createOnlineTxn);
router.post('/offline-create', authz.verifyLibrarian, txnController.createOfflineTxn);
router.post('/update', authz.verifyLibrarian, txnController.updateTxn);
router.get('/get-all', authz.verifyLibrarian, txnController.getAllTxn);
router.get('/my-transactions', txnController.getAllMyTxn);
router.get('/detail/:id', authz.verifyLibrarian, txnController.getTxn);

module.exports = router;