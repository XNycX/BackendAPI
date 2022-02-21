const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication, isAdmin } = require('../middleware/authentication');


//http://localhost:3000

//CRUD RESTFUL
router.get('/',isAdmin,authentication,UserController.getUser);
router.get('/:id',isAdmin,authentication,UserController.getUserById);
router.get('/email/:email',isAdmin,authentication,UserController.getUserByEmail);
router.post('/',UserController.register);
router.post('/login',UserController.login);
router.put('/', authentication, UserController.update);
router.delete('/logout', isAdmin, authentication, UserController.logout);
router.delete('/',isAdmin,authentication,UserController.deleteAll);
router.delete('/:id',isAdmin,authentication,UserController.deleteById);

module.exports = router;