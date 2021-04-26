const mongodb = require('mongoose');

const cartSchema = new mongodb.Schema({
        amount: { type: Number, required: false }, 
        itemId: { type: String, required: false }, 
        img: { type: String, required: false }, 
        name: { type: String, required: false }, 
        number: { type: String, required: false }, 
        price: { type: Number, required: false }, 
        series: { type: String, required: false }, 
        _id: { type: String, required: false } 
});

const orderSchema = mongodb.Schema({

  orderNumber: { type: Number, required: true },
  customerId: { type: String, required: true, },
  date: { type: String, required: true },
  count: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  cart: [cartSchema]

})

module.exports = mongodb.model('Order', orderSchema);
