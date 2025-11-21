require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration - MUST BE BEFORE ROUTES
app.use(cors({
  origin: '*', // Allow all origins for development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
}));

// Body parser middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/wishlist', require('./routes/wishlist'));

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: '🎨 Decorify API is running!',
    status: 'active',
    endpoints: {
      auth: '/api/auth (signup, login)',
      user: '/api/user',
      orders: '/api/orders',
      products: '/api/products',
      cart: '/api/cart',
      wishlist: '/api/wishlist'
    }
  });
});

app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'Backend is working!' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ 
    success: false, 
    message: err.message || 'Server error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`🧪 Test at: http://localhost:${PORT}/api/test`);
  console.log(`📦 Products at: http://localhost:${PORT}/api/products\n`);
});