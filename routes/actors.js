const express = require('express');
const ActorController = require('../controllers/actorController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');



router.get('/', authentication, ActorController.getActor);
router.post('/', authentication,isAdmin ,ActorController.create);
router.put('/', authentication,isAdmin ,ActorController.update);
router.delete('/', authentication,isAdmin, ActorController.delete);


module.exports = router;