const express = require('express');
const OrdersController = require('../controllers/OrderController');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

router.post('/',authentication, OrdersController.placeNewOrder);
router.get('/',authentication, OrdersController.getOrder);
router.put('/',authentication, OrdersController.update);

module.exports = router;