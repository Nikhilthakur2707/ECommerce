// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');

// // Get all products
// router.get('/', async (req, res) => {
//   try {
//     const { category, minPrice, maxPrice, search } = req.query;
//     let query = {};

//     if (category && category !== 'All') {
//       query.category = category;
//     }

//     if (minPrice || maxPrice) {
//       query.price = {};
//       if (minPrice) query.price.$gte = Number(minPrice);
//       if (maxPrice) query.price.$lte = Number(maxPrice);
//     }

//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { description: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const products = await Product.find(query);

//     res.json({
//       success: true,
//       count: products.length,
//       products
//     });
//   } catch (error) {
//     console.error('Get Products Error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Error fetching products'
//     });
//   }
// });

// // Get single product
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Product not found' 
//       });
//     }
//     res.json({ success: true, product });
//   } catch (error) {
//     res.status(500).json({ 
//       success: false, 
//       message: 'Error fetching product'
//     });
//   }
// });

// // Create product (for seeding)
// router.post('/', async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json({
//       success: true,
//       product
//     });
//   } catch (error) {
//     res.status(500).json({ 
//       success: false, 
//       message: 'Error creating product'
//     });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products with filtering
router.get('/', async (req, res) => {
  try {
    const { category, minPrice, maxPrice, search } = req.query;
    let query = {};

    if (category && category !== 'All') {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(query);
    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.error('Get Products Error:', error);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching product' });
  }
});

// Create product (for seeding)
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating product' });
  }
});

module.exports = router;
