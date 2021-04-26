const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');

router.post('/order', orderModel.saveOrder);

router.get('/', orderModel.getOrders);
router.get('/:id', orderModel.getCustOrders);

module.exports = router;