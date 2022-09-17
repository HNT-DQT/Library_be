const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/book');

router.post('/create', bookController.createBook);
router.post('/update', bookController.updateBook);
router.post('/delete', bookController.deleteBook);
router.get('/:titleslug/all', bookController.index);
router.get('/:id', bookController.getBook);

module.exports = router;