const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/book.controller');

router.post('/create', bookController.createBook);
router.post('/update', bookController.updateBook);
router.get('/delete', bookController.deleteBook);
router.get('/:titleslug/all', bookController.index);
router.get('/:id', bookController.getBook);

module.exports = router;