// const mongoose = require('mongoose');
// const OrderSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     products: [{ productId: String, quantity: Number, price: Number }],
//     date: { type: Date, default: Date.now },
//     status: String
// });
// module.exports = mongoose.model('Order', OrderSchema);
// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//   user: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'User',
//     required: true
//   },
//   products: [{
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product'
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       min: 1
//     },
//     price: {
//       type: Number,
//       required: true
//     }
//   }],
//   totalAmount: {
//     type: Number,
//     required: true
//   },
//   shippingAddress: {
//     fullName: String,
//     address: String,
//     city: String,
//     postalCode: String,
//     country: String
//   },
//   paymentMethod: {
//     type: String,
//     enum: ['Credit Card', 'PayPal', 'Cash on Delivery'],
//     default: 'Credit Card'
//   },
//   status: {
//     type: String,
//     enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
//     default: 'Pending'
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Order', OrderSchema);

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    productId: String,
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  shippingAddress: {
    fullName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },
  status: {
    type: String,
    default: 'Placed'
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);