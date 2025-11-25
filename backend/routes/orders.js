// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/authMiddleware');
// const Order = require('../models/Order');
// const User = require('../models/User');

// // Place new order
// router.post('/', auth, async (req, res) => {
//   try {
//     const order = new Order({
//       user: req.user.id,
//       products: req.body.products,
//       status: 'Placed'
//     });
//     await order.save();
//     await User.findByIdAndUpdate(req.user.id, { $push: { orders: order._id } });
//     res.json(order);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// // Get user's order history
// router.get('/history', auth, async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user.id });
//     res.json(orders);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');
// const User = require('../models/User');
// const auth = require('../middleware/authMiddleware');

// // Get user orders
// router.get('/', auth, async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user.id })
//       .populate('products.product')
//       .sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       orders
//     });
//   } catch (error) {
//     console.error('Get Orders Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching orders'
//     });
//   }
// });

// // Create new order (checkout)
// router.post('/create', auth, async (req, res) => {
//   try {
//     const { items, total, shippingAddress, paymentMethod } = req.body;

//     if (!items || items.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: 'No items in order'
//       });
//     }

//     const order = await Order.create({
//       user: req.user.id,
//       products: items.map(item => ({
//         product: item.productId || item.product,
//         quantity: item.quantity,
//         price: item.price
//       })),
//       totalAmount: total,
//       shippingAddress,
//       paymentMethod,
//       status: 'Pending'
//     });

//     // Clear user's cart after order
//     const user = await User.findById(req.user.id);
//     user.cart = [];
//     user.orders.push(order._id);
//     await user.save();

//     res.status(201).json({
//       success: true,
//       message: 'Order created successfully',
//       order
//     });
//   } catch (error) {
//     console.error('Create Order Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error creating order'
//     });
//   }
// });

// // Get single order
// router.get('/:id', auth, async (req, res) => {
//   try {
//     const order = await Order.findOne({
//       _id: req.params.id,
//       user: req.user.id
//     }).populate('products.product');

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: 'Order not found'
//       });
//     }

//     res.json({
//       success: true,
//       order
//     });
//   } catch (error) {
//     console.error('Get Order Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching order'
//     });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/authMiddleware'); // FIXED: Changed from 'auth' to 'authMiddleware'

// Create new order
router.post('/', auth, async (req, res) => {
  try {
    const { products, shippingAddress, status } = req.body;
    
    console.log('📦 Creating order for user:', req.user.id);
    console.log('Products:', products);
    
    const newOrder = new Order({
      user: req.user.id,
      products,
      shippingAddress,
      status: status || 'Placed'
    });

    const order = await newOrder.save();
    console.log('✅ Order created successfully:', order._id);
    
    res.json({ success: true, order });
  } catch (error) {
    console.error('❌ Order creation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
});

// Get user's order history
router.get('/history', auth, async (req, res) => {
  try {
    console.log('📋 Fetching orders for user:', req.user.id);
    
    const orders = await Order.find({ user: req.user.id })
      .sort({ date: -1 })
      .populate('products.product');
    
    console.log('✅ Found', orders.length, 'orders');
    res.json(orders);
  } catch (error) {
    console.error('❌ Fetch orders error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
});

module.exports = router;