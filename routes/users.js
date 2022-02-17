const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

//CRUD RESTful

//Traer todos los usuarios
// router.get('/', UserController.getAll);

// //Mostrar usuarios por ID
// router.get('/:id', UserController.getUserById);
//http://localhost:3000/usuarios

//Registrar usuario
router.post('/', UserController.register);
//http://localhost:3000/usuarios

//Modificar usuario por ID
// router.put('/:id', UserController.update);
// //https://localhost:3000/usuarios

// //Borrar usuario por ID
// router.delete('/:id', UserController.delete);
//https://localhost:3000/usuarios

module.exports = router;