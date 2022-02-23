const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');
const { authentication, isAdmin } = require('../middleware/authentication');

module.exports = router;