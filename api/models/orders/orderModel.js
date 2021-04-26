const mongodb = require('mongoose');

const Order = require('../orders/orderSchema');

exports.saveOrder = (req, res) => {

    const newOrder= new Order({
        orderNumber:    req.body.orderNumber,
        customerId:     req.body.customerId,
        date:           req.body.date,
        count:          req.body.count,
        totalPrice:     req.body.totalPrice,
        cart:           req.body.cart
    })

    newOrder.save()
    .then(() => {
        res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Order was saved successfully'
        })
    })
    .catch(() => {
        res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create order'
        })
    })
}

exports.getOrders = (req, res) => {
    Order.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getCustOrders = (req, res) => {
    Order.find({ customerId: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}
