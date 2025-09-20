export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  fullDescription?: string;
  origin: string;
  category: string;
  rating: number;
  unit: string;
}

export const products: Product[] = [
  {
    id: 'kalanamak-rice',
    name: 'GI Tagged Kalanamak Rice',
    price: 180,
    image: 'https://images.pexels.com/photos/4198367/pexels-photo-4198367.jpeg',
    description: 'Ancient variety with low glycemic index, high in protein, iron, and zinc. Perfect for diabetics.',
    fullDescription: 'Kalanamak rice, also known as Buddha rice or scented rice, is an heirloom variety from the Terai region of Uttar Pradesh. This aromatic rice has a unique nutty fragrance and is packed with essential nutrients. With its low glycemic index, it helps in managing blood sugar levels, making it ideal for diabetics. Rich in protein, iron, and zinc, this rice variety has been cultivated for over 600 years using traditional methods.',
    origin: 'Siddharthnagar, UP',
    category: 'rice',
    rating: 4.8,
    unit: 'kg'
  },
  {
    id: 'makhana',
    name: 'Premium Makhana (Fox Nuts)',
    price: 350,
    image: 'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg',
    description: 'Heart-healthy, high-fiber snack that supports weight management and digestive health.',
    fullDescription: 'Makhana, also known as fox nuts or lotus seeds, are harvested from the pristine wetlands of Bihar. These crunchy, nutritious seeds are naturally gluten-free and packed with protein, fiber, and essential minerals. They support heart health, aid in weight management, and improve digestive health. Our makhana is hand-picked, sun-dried, and roasted to perfection, maintaining its natural goodness and crunch.',
    origin: 'Mithila, Bihar',
    category: 'snacks',
    rating: 4.7,
    unit: 'kg'
  },
  {
    id: 'khapli-wheat',
    name: 'Organic Khapli Wheat',
    price: 75,
    image: 'https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg',
    description: 'Ancient wheat variety with lower gluten content and high nutritional value.',
    fullDescription: 'Khapli wheat, also known as Emmer wheat, is an ancient variety that has been cultivated for thousands of years. This heritage grain contains lower gluten levels compared to modern wheat, making it easier to digest. Rich in fiber, protein, and minerals, it supports digestive health and provides sustained energy. Our Khapli wheat is grown organically in the fertile soils of Bundelkhand region using traditional farming practices.',
    origin: 'Bundelkhand, MP/UP',
    category: 'wheat',
    rating: 4.6,
    unit: 'kg'
  },
  {
    id: 'organic-turmeric',
    name: 'Organic Turmeric Powder',
    price: 120,
    image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg',
    description: 'High curcumin content turmeric with anti-inflammatory properties.',
    fullDescription: 'Our organic turmeric is sourced from the hills of Karnataka, known for producing turmeric with the highest curcumin content. This golden spice is a powerhouse of antioxidants and has been used in traditional Ayurvedic medicine for centuries. With strong anti-inflammatory and immunity-boosting properties, our turmeric is carefully sun-dried and ground to preserve its natural oils and active compounds.',
    origin: 'Karnataka Hills',
    category: 'spices',
    rating: 4.9,
    unit: 'kg'
  },
  {
    id: 'black-sesame',
    name: 'Black Sesame Seeds',
    price: 180,
    image: 'https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg',
    description: 'Rich in calcium, magnesium, and healthy fats for bone and heart health.',
    fullDescription: 'Black sesame seeds from Gujarat are treasured for their exceptional nutritional profile and nutty flavor. These tiny powerhouses are loaded with calcium, magnesium, and healthy fats that support bone health, heart function, and skin vitality. Our black sesame seeds are carefully cleaned and sorted to ensure premium quality. They can be used in various culinary preparations or consumed directly for maximum health benefits.',
    origin: 'Gujarat Plains',
    category: 'seeds',
    rating: 4.5,
    unit: 'kg'
  },
  {
    id: 'organic-honey',
    name: 'Wild Forest Honey',
    price: 450,
    image: 'https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg',
    description: 'Raw, unprocessed honey collected from wild forest bees.',
    fullDescription: 'Our wild forest honey is harvested from the dense forests of Madhya Pradesh, where bees collect nectar from diverse indigenous flora. This raw, unprocessed honey retains all its natural enzymes, antioxidants, and minerals. With its rich, complex flavor profile, this honey offers numerous health benefits including boosting immunity, soothing throat irritation, and providing natural energy. Each batch is carefully tested for purity and authenticity.',
    origin: 'MP Forests',
    category: 'sweeteners',
    rating: 4.8,
    unit: 'kg'
  }
];