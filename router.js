const router = require('express').Router();
const movies = require('./routes/movies');

router.use('/movies', movies);

module.exports = router;