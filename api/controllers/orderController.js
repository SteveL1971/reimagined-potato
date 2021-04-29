const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');

router.post('/order', orderModel.saveOrder);
router.patch('/order', orderModel.completeOrder);

router.get('/', orderModel.getOrders);
router.get('/:id', orderModel.getCustOrders);

module.exports = router;