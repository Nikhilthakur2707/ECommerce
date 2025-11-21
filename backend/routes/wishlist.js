const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');

// Get wishlist
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('wishlist');
    res.json({
      success: true,
      wishlist: user.wishlist || []
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching wishlist'
    });
  }
});

// Add to wishlist
router.post('/add/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }

    const user = await User.findById(req.user.id);
    if (user.wishlist.includes(productId)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Product already in wishlist' 
      });
    }

    user.wishlist.push(productId);
    await user.save();
    await user.populate('wishlist');

    res.json({
      success: true,
      message: 'Product added to wishlist',
      wishlist: user.wishlist
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error adding to wishlist'
    });
  }
});

// Remove from wishlist
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.wishlist = user.wishlist.filter(
      id => id.toString() !== req.params.productId
    );
    await user.save();
    await user.populate('wishlist');

    res.json({
      success: true,
      wishlist: user.wishlist
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error removing from wishlist'
    });
  }
});

module.exports = router;