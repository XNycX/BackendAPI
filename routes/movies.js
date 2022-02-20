const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();

//CRUD RESTFUL
router.get('/', MovieController.getMovie);
router.get('/:id', MovieController.getMovieById);
router.get('/gender/:gender', MovieController.getMovieByGender);
router.post('/', MovieController.create);


module.exports = router;