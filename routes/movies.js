const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

//CRUD RESTFUL
router.get('/', MovieController.getMovie);
router.get('/:id', MovieController.getMovieById);
router.get('/gender/:gender', MovieController.getMovieByGender);
router.get('/actor/:actor', MovieController.getMovieByActor);
router.post('/',authentication, MovieController.create);
router.delete('/',authentication, MovieController.delete);

module.exports = router;