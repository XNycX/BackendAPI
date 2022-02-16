const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrderController');

router.post('/', OrdersController.placeNewOrder);

module.exports = router;