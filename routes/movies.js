const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();
//CRUD RESTFUL


// //Mostrar usuarios por ID
//Leer todos los usuarios
router.get('/', MovieController.getMovie);
//http://localhost:3000/usuarios

router.get('/:id', MovieController.getMovieById);

router.get('/email/:email', MovieController.getMovieByEmail);

//Registro
router.post('/', MovieController.postMovie);



// //Mostrar peliculas actualmente en cines
// router.get('/playing', MovieController.getPlayingMovie);
// //http://localhost:3000/movies/playing

// //Registrar opinion
// // router.post('/', MovieController.registerOpinion);
// //http://localhost:3000/movies

// //Mostrar peliculas populares
// router.get('/popular', MovieController.getPopularMovie);
// //http://localhost:3000/movies/popular

// //Mostrar peliculas mejor valoradas
// router.get('/top', MovieController.getTopMovie);
// //http://localhost:3000/movies/top

// //Mostrar peliculas por ID
// router.get('/', MovieController.getMovieById);
// //http://localhost:3000/movies

// //Mostrar reviews por ID
// router.get('/reviews', MovieController.getReviewById);
// //http://localhost:3000/movies/reviews

// //Mostrar las ultimas peliculas
// router.get('/lastest', MovieController.getLastestMovie);
// //http://localhost:3000/movies/lastest

// //Mostrar peliculas similares a la pelicula mostrada por ID
// router.get('/similar', MovieController.getSimilarMovieById);
// //http://localhost:3000/movies/similar

// //Borrar opinion
// // router.delete('/', MovieController.deleteOpinion);
// //https://localhost:3000/movies/

// router.get('/title', MovieController.getTitleMovie)

// router.get('/news', MovieController.getNews);

module.exports = router;