const express = require('express');
const userController = require('../controlles/userController');
const router = express.Router();

//create-crear
router.post('/user', userController.createUser);
//read-leer
router.get('/user', userController.readUser);
//read/id-leer por id
router.get('/user/:id', userController.readUserById);
//update-actualizar

//delete-borrar

module.exports = router;
