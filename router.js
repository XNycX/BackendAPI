const router = require('express').Router();

const users = require('./routes/users');
const movies = require('./routes/movies');
const orders = require('./routes/orders');

router.use('/users', users);
router.use('/movies', movies);
router.use('/orders', orders);

module.exports = router;