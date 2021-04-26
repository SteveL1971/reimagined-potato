const mongodb = require('mongoose');

const cartSchema = new mongodb.Schema({
        _id: { type: String, required: true }, 
        id: { type: String, required: false }, 
        name: { type: String, required: false }, 
        number: { type: String, required: false },
        series: { type: String, required: false }, 
        desc: { type: String, required: false }, 
        price: { type: Number, required: false }, 
        img: { type: String, required: false },
        amount: { type: Number, required: false }, 
        created: { type: Date, default: Date.now, required: false },
        modified: { type: Date, default: Date.now, required: false }
});

const orderSchema = mongodb.Schema({
  customerId: { type: String, required: false, },
  itemId: { type: String, required: false, },
  name: { type: String, required: false }, 
  number: { type: String, required: false },
  series: { type: String, required: false },
  price: { type: Number, required: false }, 
  img: { type: String, required: false },
  amount: { type: Number, required: false }, 
  // cart: [cartSchema]
})

module.exports = mongodb.model('Cart', orderSchema);
// module.exports = mongodb.model('Cart', cartSchema);
