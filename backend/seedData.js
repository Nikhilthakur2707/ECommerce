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
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQa6bYej9UvnXYx7SR5NH0cpe5Z1fn4NfrkGR_IEi95PenOYkxmNY4jFiFSC0YUmy_Fk81W6jcMBJEOJY89-jwYTxgKSvwKRorwTOsBSdEc',
    rating: 4.4,
    reviews: 167,
    stock: 40
  },
  {
    title: 'Shaggy Carpet',
    description: 'Ultra-soft shaggy carpet for bedroom. High pile height 2 inches. Available in multiple colors. Size: 4x6 feet.',
    price: 1599,
    category: 'Rugs',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS5KHEBfLLWSZ36tI6YIMz-8dgIOkKiwZOs02exVuuKmRY8XuqDCd1rQrRcVT5qyUxjk05zuB2r_AJKBTrmmPuyVs-Id6Zur593jCrvYuHi',
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
    image: 'https://m.media-amazon.com/images/I/516Bcg91Y2L.jpg',
    rating: 4.8,
    reviews: 95,
    stock: 30
  },
  {
    title: 'Minimal Pendant Light',
    description: 'Contemporary aluminum pendant with frosted glass diffuser. 1.2m adjustable cable perfect for dining areas. Easy installation.',
    price: 3399,
    category: 'Lighting',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgmQTGHOGtiFfqsHMtChO5e7q3YR9dcnBNHqAwXTg8nkS-joM9N8PsNU2pUoUNaJPfC2rB67RcsrWLfRGZ6K298wQOZ-5cuKpo1RcXpHbh63Gno_y2FiLZ&usqp=CAc',
    rating: 4.9,
    reviews: 174,
    stock: 25
  },
  {
    title: 'Crystal Chandelier',
    description: 'Elegant crystal chandelier with 6 lights. Perfect for dining rooms and living spaces. Includes all mounting hardware.',
    price: 8999,
    category: 'Lighting',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaIu10_MrHD4QPd37rIm3DShLbtV2prhWbZN7Tgo9fSGj09pIuoatmk1EygXK2jCkGK5ynAjPITYvKZvx06GrTTrKe0YrAJBTx_IoVJj4&usqp=CAc',
    rating: 4.7,
    reviews: 134,
    stock: 15
  },
  {
    title: 'LED Strip Lights',
    description: '5-meter RGB LED strip lights with remote control. 16 million colors. Perfect for ambient lighting. USB powered.',
    price: 599,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/41LHsO9vyVL._SX342_SY445_QL70_FMwebp_.jpg',
    rating: 4.3,
    reviews: 567,
    stock: 100
  },
  {
    title: 'Floor Standing Lamp',
    description: 'Modern tripod floor lamp with fabric shade. Adjustable height. Perfect for reading corners.',
    price: 3999,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/41HJ7oUib3L._SY445_SX342_QL70_FMwebp_.jpg',
    rating: 4.6,
    reviews: 89,
    stock: 35
  },
  {
    title: 'Wall Sconce Set',
    description: 'Set of 2 modern wall sconces. Black metal finish. Ideal for hallways and bedrooms. Bulbs included.',
    price: 1899,
    category: 'Lighting',
    image: 'https://m.media-amazon.com/images/I/41IpvZBFTmL._SX342_SY445_QL70_FMwebp_.jpg',
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
    image: 'https://m.media-amazon.com/images/I/51HniKhYqOL._SY300_SX300_QL70_FMwebp_.jpg',
    rating: 4.6,
    reviews: 203,
    stock: 100
  },
  {
    title: 'Velvet Cushion Covers',
    description: 'Pack of 4 luxurious velvet cushion covers. Multiple colors available. 18x18 inches. Machine washable.',
    price: 1299,
    category: 'Cushions',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzslUErlokPauQTmGuUBhEQw4-EwseXhWaGpVP0VhjggZ8r3QqLfCM-CQOWK_oNMRz9BJlUg_cof_CJhWHSohinICAWvegrGUOqchc8oowI7m0voXW3MNEZQ',
    rating: 4.7,
    reviews: 345,
    stock: 80
  },
  {
    title: 'Geometric Print Cushions',
    description: 'Modern geometric pattern cushion set. Canvas fabric. Set of 5. Perfect for sofas and beds.',
    price: 1599,
    category: 'Cushions',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfSlVvfB6YrhAlvbdp5Am364zDJg0Ya4UPMOsVGM1g14YlDdWk7oSCC41lfyOzv65FINREViQkcr1ouZFDvqUQysM3LpLE1QwcDgpxUJh0',
    rating: 4.4,
    reviews: 178,
    stock: 60
  },
  {
    title: 'Boho Tassels Cushions',
    description: 'Bohemian style cushions with tassels. Handwoven cotton. Set of 2. Adds texture to any space.',
    price: 999,
    category: 'Cushions',
    image: 'https://m.media-amazon.com/images/I/81S6hqeMbaL.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1Wz7SLtxqcf1EqjCDFitUxJP_Ro2sHJbhDKVg6nA6BhgZEDXd9ETWYRO2easQ7OhanfBnOeErAj2vhrkZbQXZJmO-TbZAE8kfdUlTDX9UOGoLVEOIQQ4lCw',
    rating: 4.5,
    reviews: 112,
    stock: 45
  },
  {
    title: 'Decorative Candle Set',
    description: 'Set of 3 scented candles in glass jars. Lavender, vanilla, and citrus fragrances. 40-hour burn time.',
    price: 899,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/71Vuv+0OjXL.jpg',
    rating: 4.7,
    reviews: 289,
    stock: 90
  },
  {
    title: 'Wooden Wall Shelves',
    description: 'Set of 3 floating wall shelves. Solid wood construction. Perfect for displaying plants and photos.',
    price: 1499,
    category: 'Decor',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcXJwrPXq_lN_fRiTsMZvkMPxRYoWELk-kaqd0rSlznWKhaOO7Pdtf4BfR62eqkmvxawS1NUBbklAelY17GOLEvTz9kynBo57Z1p8vHx8yqmYfo4O3xi9hNQ',
    rating: 4.6,
    reviews: 234,
    stock: 55
  },
  {
  title: 'Abstract Canvas Painting',
    description: 'Modern abstract art canvas. Ready to hang. Size: 30x40 inches. Adds color to any room.',
    price: 3499,
    category: 'Decor',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkzGerEAE6ouB8USSwgjvi6aM6QGSPQAPOUq4QFoZWNh-digDpA4PeKzxPaxgGGmxTpvmztvQlJKpZA4yuY5XJSY_XZgVNan6lp6LqNWc',
    rating: 4.4,
    reviews: 98,
    stock: 30
  },
  {
    title: 'Brass Photo Frames',
    description: 'Set of 5 brass photo frames in various sizes. Table-standing and wall-mountable. Timeless design.',
    price: 1299,
    category: 'Decor',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSS3f3FQC9r2nwYH4S4OVbvwtVvCrdm4f_1KNyMOavgirCuWI7FURoiqkcXL999qZxB72_q12ay7kRw-sBYUTfe2k02Jg2OwzH2elbr2kWs5mDyLOQlRez1pA',
    rating: 4.8,
    reviews: 178,
    stock: 65
  },
  {
    title: 'Artificial Succulent Set',
    description: 'Set of 6 realistic artificial succulents in pots. No maintenance required. Perfect for office desks.',
    price: 799,
    category: 'Decor',
    image: 'https://m.media-amazon.com/images/I/51ssL9F3sNL.jpg',
    rating: 4.3,
    reviews: 267,
    stock: 100
  },
  {
    title: 'Decorative Tray Set',
    description: 'Set of 2 wooden serving trays with handles. Perfect for breakfast in bed or coffee table styling.',
    price: 1199,
    category: 'Decor',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkmdeFV4l6fxRDz9fv1mF1va24yyfnIBZGsW-dqv3NYjeF95nv1nHRLpNx-RRKI6BM_1Qcn9hNgpLF8zZo1SYeUMDHeb_tasQnL4_1LQ9TnEVQ0ua_W4gtmA',
    rating: 4.5,
    reviews: 145,
    stock: 70
  },
  {
    title: 'Himalayan Salt Lamp',
    description: 'Natural Himalayan pink salt lamp. Creates warm ambient glow. Wooden base included. 3-5 kg.',
    price: 999,
    category: 'Decor',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0VM3LXwhw62YofWrLADLz4lQQOeGlrLoVSbpEkqIfmc4xDKt-_8ssiMjCekljld6DC-rZHpHEP8fY2Nu_AAmBrKjB0AnSh1TLklBerq5hAU0I80ZXkBkM2g',
    rating: 4.6,
    reviews: 456,
    stock: 85
  },
  {
    title: 'Decorative Storage Baskets',
    description: 'Set of 3 woven storage baskets. Natural seagrass material. Perfect for organizing and styling.',
    price: 1599,
    category: 'Decor',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3oTIFSNu5H-V1NMl4ZpW_gO0qtsYg4KN33LvizY7By6ZO7nJo0a_mV6g9raJkfuOjehZ9f-WUsAxoaLFRhrUxdrKt0NqAb_tylHTo_F5Vyie5aZBLC98Q',
    rating: 4.7,
    reviews: 189,
    stock: 50
  },
  {
    title: 'Wind Chimes',
    description: 'Melodious metal wind chimes. Weather-resistant. Creates soothing sounds. Length: 24 inches.',
    price: 599,
    category: 'Decor',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp78j6H-rAJcnKuO4B0pYJ4Az3KIrj5IfYYMC0lbrIbSBi1xrZXNhebJH_zKCxL2giC7Ftbn1y0HBj9XwXakM5OghCAUdocYOGcBPIDE8',
    rating: 4.4,
    reviews: 234,
    stock: 75
  },
  {
    title: 'Decorative Throw Blanket',
    description: 'Chunky knit throw blanket. Super soft and cozy. Perfect for sofas and beds. Size: 50x60 inches.',
    price: 1899,
    category: 'Decor',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKdYkVOlIeY67BUc3YpiKkN96dqOlhRD-gnLJZaa8clFAlmvzai-xU3V2wz8FtDC0AWgzdY6zYmR6oEFL5bgaEc4dT09HCZDfYLjQ-8ek',
    rating: 4.8,
    reviews: 312,
    stock: 60
  },
  {
    title: 'Table Runner',
    description: 'Elegant table runner with tassels. Cotton blend fabric. Perfect for dining tables. 13x72 inches.',
    price: 699,
    category: 'Decor',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh5Uoe-wdiv3Aopjv4K-oxIQeR6PdXlaXluVuNqc5mLC9aHzTeS-nYvdlHhinmvLSgYC5M06w5054-s6c_mTRg3Q5LKHKxbnjbD-gZjc88',
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