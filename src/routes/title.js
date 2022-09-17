const express = require('express');
const router = express.Router();

const titleController = require('../app/controllers/title');

router.post('/create', titleController.createTitle);
router.post('/update', titleController.updateTitle);
router.post('/delete', titleController.deleteTitle);
router.get('/list', titleController.index);
router.get('/:slug', titleController.getTitle);

module.exports = router;