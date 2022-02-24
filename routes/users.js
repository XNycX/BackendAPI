const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');


//http://localhost:3000

//CRUD RESTFUL
router.get('/',UserController.getUser);
router.get('/id',authentication,UserController.getUserById);
router.get('/email',authentication,UserController.getUserByEmail);
router.post('/register', UserController.register);
router.post('/register/email',UserController.registerByEmail);
router.post('/login', UserController.login);
router.post('/login/email',UserController.loginByEmail);
router.put('/', authentication, UserController.update);
router.put('/newpassword', authentication, UserController.updatePassword);
router.delete('/',authentication,isAdmin,UserController.deleteAll);
router.delete('/delete',authentication,isAdmin,UserController.deleteById);

module.exports = router;