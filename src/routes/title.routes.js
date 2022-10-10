const express = require('express');
const router = express.Router();
const authz = require('../middlewares/authorization');

const titleController = require('../app/controllers/title.controller');

router.post('/create', authz.verifyLibrarian, titleController.createTitle);
router.post('/update', authz.verifyLibrarian, titleController.updateTitle);
router.get('/delete', authz.verifyLibrarian, titleController.deleteTitle);
router.get('/list', titleController.getAllTitles);
router.get('/:slug', titleController.getTitle);

module.exports = router;