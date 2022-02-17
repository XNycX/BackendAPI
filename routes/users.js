const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

//CRUD RESTful

//Traer todos los usuarios
// router.get('/', UserController.getAll);

// //Mostrar usuarios por ID
//Leer todos los usuarios
router.get('/', UserController.getUser);
//http://localhost:3000/usuarios

router.get('/:id', UserController.getUserById);

router.get('/email/:email', UserController.getUserByEmail);

//Registro
router.post('/', UserController.register);
//http://localhost:3000/usuarios

//Login
// router.post('/login', UserController.logUsuario);
//https://localhost:3000/usuarios/login
//Registrar usuario
// router.post('/', UserController.register);
//http://localhost:3000/usuarios

//Modificar usuario por ID
// router.put('/:id', UserController.update);
// //https://localhost:3000/usuarios

// //Borrar usuario por ID
// router.delete('/:id', UserController.delete);
//https://localhost:3000/usuarios

module.exports = router;