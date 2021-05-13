const express = require('express');
const router = express.Router();
const controller = require('../controller/apiController');

router.get('/users', controller.getUsers)
router.get('/users/:id', controller.getUser)
router.post('/users', controller.createUser)
router.patch('/users/:id', controller.updateUser)
router.delete('/users/:id', controller.destroyUser)


module.exports = router;