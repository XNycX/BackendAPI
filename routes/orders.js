const express = require('express');
const OrdersController = require('../controllers/OrderController');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

router.post('/',/*authentication,*/ OrdersController.placeNewOrder);

module.exports = router;