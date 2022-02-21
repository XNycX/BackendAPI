const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication } = require('../middleware/authentication');


//http://localhost:3000

//CRUD RESTFUL
router.get('/', authentication,UserController.getUser);
router.get('/:id',authentication,UserController.getUserById);
router.get('/email/:email',authentication,UserController.getUserByEmail);
router.post('/',UserController.register);
router.post('/login',UserController.login);
router.put('/',authentication,UserController.update);
router.delete('/', authentication,UserController.deleteAll);
router.delete('/:id',authentication,UserController.deleteById);
router.delete('/logout',authentication,UserController.logout)

module.exports = router;