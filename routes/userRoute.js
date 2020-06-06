const express = require('express');
const userController = require('../controlles/userController')
const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user/:id', userController.readUserById);

module.exports = router;