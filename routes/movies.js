const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');


router.get('/', MovieController.getMovies);
router.get('/:id', MovieController.getMovieById);
router.get('/title/:title', MovieController.getMovieByTitle);
router.post('/', authentication, isAdmin, MovieController.create);
router.post('/many',authentication,isAdmin, MovieController.createMany);
router.delete('/:id',authentication,isAdmin, MovieController.deleteById);

module.exports = router;