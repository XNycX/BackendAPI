const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');
const { authentication, isAdmin } = require('../middleware/authentication');

module.exports = router;