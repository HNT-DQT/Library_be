const express = require('express');
const router = express.Router();

const extensionController = require('../app/controllers/extension.controller');

router.post('/create', extensionController.createExtension);
router.post('/update', extensionController.updateExtension);
router.post('/delete', extensionController.deleteExtension);
router.get('/:transslug/all', extensionController.index);
router.get('/:id', extensionController.getExtension);

module.exports = router;