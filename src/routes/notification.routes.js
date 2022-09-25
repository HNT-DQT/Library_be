const express = require('express');
const router = express.Router();

const notiController = require('../app/controllers/notification.controller');

router.post('/create', notiController.createNoti);
router.post('/update', notiController.updateNoti);
router.get('/delete', notiController.deleteNoti);
router.get('/:userslug/all', notiController.index);
router.get('/:id', notiController.getNoti);

module.exports = router;