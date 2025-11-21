// // const express = require('express');
// // const router = express.Router();
// // const User = require('../models/User');
// // const Product = require('../models/Product');
// // const auth = require('../middleware/authMiddleware');

// // // Get user cart
// // router.get('/', auth, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user.id).populate('cart.product');
// //     res.json({
// //       success: true,
// //       cart: user.cart || []
// //     });
// //   } catch (error) {
// //     res.status(500).json({ 
// //       success: false, 
// //       message: 'Error fetching cart'
// //     });
// //   }
// // });

// // // Add to cart
// // router.post('/add', auth, async (req, res) => {
// //   try {
// //     const { productId, quantity = 1 } = req.body;

// //     const product = await Product.findById(productId);
// //     if (!product) {
// //       return res.status(404).json({ 
// //         success: false, 
// //         message: 'Product not found' 
// //       });
// //     }

// //     const user = await User.findById(req.user.id);
// //     const existingItem = user.cart.find(
// //       item => item.product.toString() === productId
// //     );

// //     if (existingItem) {
// //       existingItem.quantity += quantity;
// //     } else {
// //       user.cart.push({ product: productId, quantity });
// //     }

// //     await user.save();
// //     await user.populate('cart.product');

// //     res.json({
// //       success: true,
// //       message: 'Product added to cart',
// //       cart: user.cart
// //     });
// //   } catch (error) {
// //     res.status(500).json({ 
// //       success: false, 
// //       message: 'Error adding to cart'
// //     });
// //   }
// // });

// // // Update cart quantity
// // router.put('/update', auth, async (req, res) => {
// //   try {
// //     const { productId, quantity } = req.body;

// //     const user = await User.findById(req.user.id);
// //     const cartItem = user.cart.find(
// //       item => item.product.toString() === productId
// //     );

// //     if (!cartItem) {
// //       return res.status(404).json({ 
// //         success: false, 
// //         message: 'Product not in cart' 
// //       });
// //     }

// //     cartItem.quantity = quantity;
// //     await user.save();
// //     await user.populate('cart.product');

// //     res.json({
// //       success: true,
// //       cart: user.cart
// //     });
// //   } catch (error) {
// //     res.status(500).json({ 
// //       success: false, 
// //       message: 'Error updating cart'
// //     });
// //   }
// // });

// // // Remove from cart
// // router.delete('/remove/:productId', auth, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user.id);
// //     user.cart = user.cart.filter(
// //       item => item.product.toString() !== req.params.productId
// //     );
// //     await user.save();
// //     await user.populate('cart.product');

// //     res.json({
// //       success: true,
// //       cart: user.cart
// //     });
// //   } catch (error) {
// //     res.status(500).json({ 
// //       success: false, 
// //       message: 'Error removing from cart'
// //     });
// //   }
// // });

// // // Clear cart
// // router.delete('/clear', auth, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user.id);
// //     user.cart = [];
// //     await user.save();
// //     res.json({ success: true, message: 'Cart cleared' });
// //   } catch (error) {
// //     res.status(500).json({ 
// //       success: false, 
// //       message: 'Error clearing cart'
// //     });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const Product = require('../models/Product');
// const auth = require('../middleware/authMiddleware');

// // Get user cart
// router.get('/', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).populate('cart.product');
//     res.json({
//       success: true,
//       cart: user.cart || []
//     });
//   } catch (error) {
//     console.error('Get Cart Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching cart'
//     });
//   }
// });

// // Add to cart
// router.post('/add', auth, async (req, res) => {
//   try {
//     const { productId, quantity = 1 } = req.body;

//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: 'Product not found'
//       });
//     }

//     const user = await User.findById(req.user.id);
//     const existingItem = user.cart.find(
//       item => item.product.toString() === productId
//     );

//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       user.cart.push({ product: productId, quantity });
//     }

//     await user.save();
//     await user.populate('cart.product');

//     res.json({
//       success: true,
//       message: 'Product added to cart',
//       cart: user.cart
//     });
//   } catch (error) {
//     console.error('Add to Cart Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error adding to cart'
//     });
//   }
// });

// // Update cart quantity
// router.put('/update', auth, async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;

//     const user = await User.findById(req.user.id);
//     const cartItem = user.cart.find(
//       item => item.product.toString() === productId
//     );

//     if (!cartItem) {
//       return res.status(404).json({
//         success: false,
//         message: 'Product not in cart'
//       });
//     }

//     cartItem.quantity = quantity;
//     await user.save();
//     await user.populate('cart.product');

//     res.json({
//       success: true,
//       cart: user.cart
//     });
//   } catch (error) {
//     console.error('Update Cart Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error updating cart'
//     });
//   }
// });

// // Remove from cart
// router.delete('/remove/:productId', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     user.cart = user.cart.filter(
//       item => item.product.toString() !== req.params.productId
//     );

//     await user.save();
//     await user.populate('cart.product');

//     res.json({
//       success: true,
//       cart: user.cart
//     });
//   } catch (error) {
//     console.error('Remove from Cart Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error removing from cart'
//     });
//   }
// });

// // Clear cart
// router.delete('/clear', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     user.cart = [];
//     await user.save();

//     res.json({ 
//       success: true, 
//       message: 'Cart cleared' 
//     });
//   } catch (error) {
//     console.error('Clear Cart Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error clearing cart'
//     });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');

// Get user cart
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('cart.product');
    res.json({ success: true, cart: user.cart });
  } catch (error) {
    console.error('Get Cart Error:', error);
    res.status(500).json({ success: false, message: 'Error fetching cart' });
  }
});

// Add to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const user = await User.findById(req.user.id);
    const existingItem = user.cart.find(item => item.product.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    await user.populate('cart.product');
    res.json({ success: true, message: 'Product added to cart', cart: user.cart });
  } catch (error) {
    console.error('Add to Cart Error:', error);
    res.status(500).json({ success: false, message: 'Error adding to cart' });
  }
});

// Update cart quantity
router.put('/update', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.user.id);
    const cartItem = user.cart.find(item => item.product.toString() === productId);

    if (!cartItem) {
      return res.status(404).json({ success: false, message: 'Product not in cart' });
    }

    cartItem.quantity = quantity;
    await user.save();
    await user.populate('cart.product');
    res.json({ success: true, cart: user.cart });
  } catch (error) {
    console.error('Update Cart Error:', error);
    res.status(500).json({ success: false, message: 'Error updating cart' });
  }
});

// Remove from cart
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.cart = user.cart.filter(item => item.product.toString() !== req.params.productId);
    await user.save();
    await user.populate('cart.product');
    res.json({ success: true, cart: user.cart });
  } catch (error) {
    console.error('Remove from Cart Error:', error);
    res.status(500).json({ success: false, message: 'Error removing from cart' });
  }
});

// Clear cart
router.delete('/clear', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.cart = [];
    await user.save();
    res.json({ success: true, message: 'Cart cleared' });
  } catch (error) {
    console.error('Clear Cart Error:', error);
    res.status(500).json({ success: false, message: 'Error clearing cart' });
  }
});

module.exports = router;
