const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication, isAdmin } = require('../middleware/authentication');


//http://localhost:3000

//CRUD RESTFUL
router.get('/',authentication,UserController.getUser);
router.get('/id',authentication,UserController.getUserById);
router.get('/email',authentication,UserController.getUserByEmail);
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.put('/', authentication, UserController.update);
router.put('/newpassword', authentication, UserController.updatePassword);
router.delete('/',isAdmin,authentication,UserController.deleteAll);
router.delete('/delete',isAdmin,authentication,UserController.deleteById);

module.exports = router;