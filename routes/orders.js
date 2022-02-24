const express = require('express');
const OrdersController = require('../controllers/OrderController');
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication');

router.post('/',authentication, OrdersController.placeNewOrder);
router.get('/',authentication, OrdersController.getOrder);
router.put('/', authentication, isAdmin, OrdersController.update);
router.delete('/:id',authentication, isAdmin, OrdersController.deleteById);

module.exports = router;