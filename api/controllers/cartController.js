const router = require('express').Router();
const cartModel = require('../models/cart/cartModel');

router.post('/post', cartModel.saveItem);

router.get('/', cartModel.getOrders);

router.patch('/patch', cartModel.patchItem);

router.delete('/delete', cartModel.deleteItem);
router.delete('/deleteCart', cartModel.deleteCart);

module.exports = router;