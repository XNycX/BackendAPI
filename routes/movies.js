const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');

//CRUD RESTFUL
router.get('/', MovieController.getMovie);
router.get('/:id', MovieController.getMovieById);
router.get('/gender/:gender', MovieController.getMovieByGender);
router.post('/', authentication, isAdmin, MovieController.create);
router.post('/many',authentication,isAdmin, MovieController.createMany);
router.delete('/:id',authentication,isAdmin, MovieController.deleteById);

module.exports = router;