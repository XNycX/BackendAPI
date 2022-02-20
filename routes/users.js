const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

//http://localhost:3000

//CRUD RESTFUL
router.get('/', UserController.getUser);
router.get('/:id', UserController.getUserById);
router.get('/email/:email', UserController.getUserByEmail);
router.post('/', UserController.register);
router.post('/login', UserController.login);
router.put('/', UserController.update);
router.delete('/', UserController.deleteAll);
router.delete('/:id', UserController.deleteById);


module.exports = router;