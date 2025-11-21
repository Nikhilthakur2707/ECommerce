require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  // RUGS
  {
    title: 'Handwoven Jute Rug',
    description: 'Eco-friendly jute rug handwoven by artisans. Adds warmth to living rooms and entryways. Perfect for low to medium traffic areas. Durable and sustainable material that ages beautifully.',
    price: 1299,
    category: 'Rugs',
    image: 'https://m.media-amazon.com/images/I/71vrHA52PDL._SX679_.jpg',
    rating: 4.5,
    reviews: 128,
    stock: 50
  },
  {
    title: 'Persian Style Area Rug',
    description: 'Traditional Persian design area rug with intricate patterns. Made from soft polyester fibers. Machine washable. Size: 5x7 feet.',
    price: 2499,
    category: 'Rugs',
    image: 'https://m.media-amazon.com/images/I/915ZAMCMWtL._AC_UF894,1000_QL80_.jpg',
    rating: 4.7,
    reviews: 245,
    stock: 30
  },
  {
    title: 'Modern Geometric Rug',
    description: 'Contemporary geometric pattern rug in grey and white. Non-slip backing. Perfect for modern living spaces.',
    price: 1799,
    category: 'Rugs',
    image: 'https://m.media-amazon.com/images/I/81J5cHXVOtL._SX679_.jpg',
    rating: 4.4,
    reviews: 167,
    stock: 40
  },
  {
    title: 'Shaggy Carpet',
    description: 'Ultra-soft shaggy carpet for bedroom. High pile height 2 inches. Available in multiple colors. Size: 4x6 feet.',
    price: 1599,
    category: 'Rugs',
    image: 'https://m.media-amazon.com/images/I/71T8YE5OzNL._SX679_.jpg',
    rating: 4.6,
    reviews: 198,
    stock: 45
  },

  // LIGHTING
  {
    title: 'Brass Table Lamp',
    description: 'Classic brass lamp with premium linen shade. Soft, warm glow ideal for bedside or study table. E27 holder compatible with LED bulbs.',
    price: 2499,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/71zaNbZuiDL._SX425_.jpg',
    rating: 4.8,
    reviews: 95,
    stock: 30
  },
  {
    title: 'Minimal Pendant Light',
    description: 'Contemporary aluminum pendant with frosted glass diffuser. 1.2m adjustable cable perfect for dining areas. Easy installation.',
    price: 3399,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/71JFpHQwENL._SX466_.jpg',
    rating: 4.9,
    reviews: 174,
    stock: 25
  },
  {
    title: 'Crystal Chandelier',
    description: 'Elegant crystal chandelier with 6 lights. Perfect for dining rooms and living spaces. Includes all mounting hardware.',
    price: 8999,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/71hLZHz7r4L._SX679_.jpg',
    rating: 4.7,
    reviews: 134,
    stock: 15
  },
  {
    title: 'LED Strip Lights',
    description: '5-meter RGB LED strip lights with remote control. 16 million colors. Perfect for ambient lighting. USB powered.',
    price: 599,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/71U+M9mKmJL._SX679_.jpg',
    rating: 4.3,
    reviews: 567,
    stock: 100
  },
  {
    title: 'Floor Standing Lamp',
    description: 'Modern tripod floor lamp with fabric shade. Adjustable height. Perfect for reading corners.',
    price: 3999,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/61FXS7LKEQL._SX679_.jpg',
    rating: 4.6,
    reviews: 89,
    stock: 35
  },
  {
    title: 'Wall Sconce Set',
    description: 'Set of 2 modern wall sconces. Black metal finish. Ideal for hallways and bedrooms. Bulbs included.',
    price: 1899,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/61oK7yMKZfL._SX679_.jpg',
    rating: 4.5,
    reviews: 123,
    stock: 50
  },

  // CUSHIONS
  {
    title: 'Embroidered Cushion Set',
    description: 'Set of 2 premium cotton cushion covers with intricate hand embroidery. Features concealed zipper. Size: 16x16 inches.',
    price: 899,
    category: 'Cushions',
    image: 'https://m.media-amazon.com/images/I/81TOjvhjqoL._SX679_.jpg',
    rating: 4.6,
    reviews: 203,
    stock: 100
  },
  {
    title: 'Velvet Cushion Covers',
    description: 'Pack of 4 luxurious velvet cushion covers. Multiple colors available. 18x18 inches. Machine washable.',
    price: 1299,
    category: 'Cushions',
    image: 'https://m.media-amazon.com/images/I/81Y0qAVZSiL._SX679_.jpg',
    rating: 4.7,
    reviews: 345,
    stock: 80
  },
  {
    title: 'Geometric Print Cushions',
    description: 'Modern geometric pattern cushion set. Canvas fabric. Set of 5. Perfect for sofas and beds.',
    price: 1599,
    category: 'Cushions',
    image: 'https://m.media-amazon.com/images/I/91X+3x7jRXL._SX679_.jpg',
    rating: 4.4,
    reviews: 178,
    stock: 60
  },
  {
    title: 'Boho Tassels Cushions',
    description: 'Bohemian style cushions with tassels. Handwoven cotton. Set of 2. Adds texture to any space.',
    price: 999,
    category: 'Cushions',
    image: 'https://m.media-amazon.com/images/I/81GHCWO5p0L._SX679_.jpg',
    rating: 4.5,
    reviews: 156,
    stock: 70
  },

  // DECOR
  {
    title: 'Terracotta Vase',
    description: 'Handcrafted matte-finish terracotta bud vase. Perfect for dried flowers or fresh blooms. Each piece is unique.',
    price: 699,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/71d5bM2UF9L._SX679_.jpg',
    rating: 4.4,
    reviews: 87,
    stock: 75
  },
  {
    title: 'Boho Wall Hanging',
    description: 'Stunning macramé wall hanging made with 100% recycled cotton cord. Includes wooden hanging rod.',
    price: 799,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/716k-qzzf6L._SX522_.jpg',
    rating: 4.7,
    reviews: 156,
    stock: 60
  },
  {
    title: 'Ceramic Plant Pot Set',
    description: 'Set of 3 modern ceramic pots in gradient sizes. Perfect for succulents. Drainage holes included.',
    price: 549,
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
    rating: 4.3,
    reviews: 92,
    stock: 80
  },
  {
    title: 'Vintage Mirror',
    description: 'Antique-style decorative mirror with ornate brass frame. Makes any space feel larger and brighter.',
    price: 1899,
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400',
    rating: 4.6,
    reviews: 143,
    stock: 40
  },
  {
    title: 'Metal Wall Art',
    description: 'Contemporary metal wall art sculpture. Black finish. Easy to hang. Size: 24x36 inches.',
    price: 2499,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/71VqZ-dC0gL._SX679_.jpg',
    rating: 4.5,
    reviews: 112,
    stock: 45
  },
  {
    title: 'Decorative Candle Set',
    description: 'Set of 3 scented candles in glass jars. Lavender, vanilla, and citrus fragrances. 40-hour burn time.',
    price: 899,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/71w5hO7WvzL._SX679_.jpg',
    rating: 4.7,
    reviews: 289,
    stock: 90
  },
  {
    title: 'Wooden Wall Shelves',
    description: 'Set of 3 floating wall shelves. Solid wood construction. Perfect for displaying plants and photos.',
    price: 1499,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/71AuMkYYqfL._SX679_.jpg',
    rating: 4.6,
    reviews: 234,
    stock: 55
  },
  {
    title: 'Abstract Canvas Painting',
    description: 'Modern abstract art canvas. Ready to hang. Size: 30x40 inches. Adds color to any room.',
    price: 3499,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/81QV8FJ5qVL._SX679_.jpg',
    rating: 4.4,
    reviews: 98,
    stock: 30
  },
  {
    title: 'Brass Photo Frames',
    description: 'Set of 5 brass photo frames in various sizes. Table-standing and wall-mountable. Timeless design.',
    price: 1299,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/71kT8YjbkqL._SX679_.jpg',
    rating: 4.8,
    reviews: 178,
    stock: 65
  },
  {
    title: 'Artificial Succulent Set',
    description: 'Set of 6 realistic artificial succulents in pots. No maintenance required. Perfect for office desks.',
    price: 799,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/81xgA+mxpWL._SX679_.jpg',
    rating: 4.3,
    reviews: 267,
    stock: 100
  },
  {
    title: 'Decorative Tray Set',
    description: 'Set of 2 wooden serving trays with handles. Perfect for breakfast in bed or coffee table styling.',
    price: 1199,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/81pNZo7MYKL._SX679_.jpg',
    rating: 4.5,
    reviews: 145,
    stock: 70
  },
  {
    title: 'Himalayan Salt Lamp',
    description: 'Natural Himalayan pink salt lamp. Creates warm ambient glow. Wooden base included. 3-5 kg.',
    price: 999,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/61MR8V+MhcL._SX679_.jpg',
    rating: 4.6,
    reviews: 456,
    stock: 85
  },
  {
    title: 'Decorative Storage Baskets',
    description: 'Set of 3 woven storage baskets. Natural seagrass material. Perfect for organizing and styling.',
    price: 1599,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/91vH5RZOb9L._SX679_.jpg',
    rating: 4.7,
    reviews: 189,
    stock: 50
  },
  {
    title: 'Wind Chimes',
    description: 'Melodious metal wind chimes. Weather-resistant. Creates soothing sounds. Length: 24 inches.',
    price: 599,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/714HCv7Cp+L._SX679_.jpg',
    rating: 4.4,
    reviews: 234,
    stock: 75
  },
  {
    title: 'Decorative Throw Blanket',
    description: 'Chunky knit throw blanket. Super soft and cozy. Perfect for sofas and beds. Size: 50x60 inches.',
    price: 1899,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/81C8xQFH3yL._SX679_.jpg',
    rating: 4.8,
    reviews: 312,
    stock: 60
  },
  {
    title: 'Table Runner',
    description: 'Elegant table runner with tassels. Cotton blend fabric. Perfect for dining tables. 13x72 inches.',
    price: 699,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/81oa3dC7LoL._SX679_.jpg',
    rating: 4.5,
    reviews: 167,
    stock: 90
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    const created = await Product.insertMany(products);
    console.log(`✅ Added ${created.length} products to database`);
    
    console.log('\n🎉 Database seeded successfully!');
    console.log(`📦 Total products: ${created.length}\n`);
    
    console.log('Sample products:');
    created.slice(0, 5).forEach(p => {
      console.log(`  - ${p.title} (₹${p.price})`);
    });
    console.log('  ...\n');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDatabase();