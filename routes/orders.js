const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrderController');
const { authentication } = require('../middleware/authentication');

router.post('/', OrdersController.placeNewOrder);

module.exports = router;