const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();
//CRUD RESTFUL

//Mostrar peliculas actualmente en cines
router.get('/playing', MovieController.getPlayingMovie);
//http://localhost:3000/movies/playing

//Registrar opinion
// router.post('/', MovieController.registerOpinion);
//http://localhost:3000/movies

//Mostrar peliculas populares
router.get('/popular', MovieController.getPopularMovie);
//http://localhost:3000/movies/popular

//Mostrar peliculas mejor valoradas
router.get('/top', MovieController.getTopMovie);
//http://localhost:3000/movies/top

//Mostrar peliculas por ID
router.get('/', MovieController.getMovieById);
//http://localhost:3000/movies

//Mostrar reviews por ID
router.get('/reviews', MovieController.getReviewById);
//http://localhost:3000/movies/reviews

//Borrar opinion
// router.delete('/', MovieController.deleteOpinion);
//https://localhost:3000/movies/

router.get('/title', MovieController.getTitleMovie)

router.get('/news', MovieController.getNews);

module.exports = router;