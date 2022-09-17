const express = require('express');
const router = express.Router();

const notiController = require('../app/controllers/notification');

router.post('/create', notiController.createNoti);
router.post('/update', notiController.updateNoti);
router.post('/delete', notiController.deleteNoti);
router.get('/:userslug/all', notiController.index);
router.get('/:id', notiController.getNoti);

module.exports = router;