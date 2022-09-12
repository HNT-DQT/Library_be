const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/site');

router.get('/home', siteController.index);
router.get('/', siteController.index);

module.exports = router;