const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');

//CRUD RESTFUL
router.get('/', MovieController.getMovie);
router.get('/:id', MovieController.getMovieById);
router.get('/gender/:gender', MovieController.getMovieByGender);
router.post('/',isAdmin,authentication, MovieController.create);
router.delete('/',isAdmin,authentication, MovieController.delete);

module.exports = router;