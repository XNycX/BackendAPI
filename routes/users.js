const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/', UserController.getUser);
//http://localhost:3000/usuarios

router.get('/:id', UserController.getUserById);

router.get('/email/:email', UserController.getUserByEmail);

//Registrar usuario
router.post('/', UserController.register);
//http://localhost:3000/usuarios

//Login
// router.post('/login', UserController.logUsuario);
//https://localhost:3000/usuarios/login

//Modificar usuario por ID
router.put('/', UserController.update);
//Borrar todos los usuarios
router.delete('/', UserController.deleteAll);
// //Borrar usuario por ID
router.delete('/:id', UserController.deleteById);
//https://localhost:3000/usuarios/

module.exports = router;