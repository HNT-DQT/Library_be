const express = require('express');
const router = express.Router();

const titleController = require('../app/controllers/title.controller');

router.post('/create', titleController.createTitle);
router.post('/update', titleController.updateTitle);
router.get('/delete', titleController.deleteTitle);
router.get('/list', titleController.getAllTitles);
router.get('/:slug', titleController.getTitle);

module.exports = router;