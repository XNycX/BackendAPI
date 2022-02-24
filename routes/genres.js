const express = require('express');
const GenreController = require('../controllers/genreController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');



router.get('/', authentication, GenreController.getGenre);
router.get('/name/:name', GenreController.getGenreByName);
router.post('/', authentication,isAdmin, GenreController.create);
router.put('/', authentication,isAdmin, GenreController.update);
router.delete('/', authentication,isAdmin, GenreController.delete);


module.exports = router;