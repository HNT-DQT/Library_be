const express = require('express');
const router = express.Router();
const authz = require('../middlewares/authorization');

const bookController = require('../app/controllers/book.controller');

router.post('/create', authz.verifyLibrarian, bookController.createBook);
router.post('/update', authz.verifyLibrarian, bookController.updateBook);
router.get('/delete', authz.verifyLibrarian, bookController.deleteBook);
router.get('/get-all/:titleslug', authz.verifyLibrarian, bookController.getAllBooks);
router.get('/:id', authz.verifyLibrarian, bookController.getBook);

module.exports = router;