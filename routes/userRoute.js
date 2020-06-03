const express = require('express');
const userController = require('../controlles/userController')
const router = express.Router();

router.post('/user', userController.createUser);


module.exports = router;