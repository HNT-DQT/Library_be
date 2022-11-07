const express = require('express');
const router = express.Router();

const notiController = require('../app/controllers/notification.controller');

router.post('/create', notiController.createNoti);
router.post('/update', notiController.updateNoti);
router.get('/delete', notiController.deleteNoti);
router.get('/all/:userId', notiController.index);
router.get('/detail/:id', notiController.getNoti);

module.exports = router;