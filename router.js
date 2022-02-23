const router = require('express').Router();

const users = require('./routes/users');
const movies = require('./routes/movies');
const orders = require('./routes/orders');
const actors = require('./routes/actors');
const genres = require('./routes/genres');


router.use('/users', users);
router.use('/movies', movies);
router.use('/orders', orders);
router.use('/actors', actors);
router.use('/genres', genres);

module.exports = router;