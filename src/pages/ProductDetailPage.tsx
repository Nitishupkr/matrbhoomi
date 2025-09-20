import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, MapPin, Shield, Leaf, QrCode, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            Browse all products →
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const nutritionFacts = {
    'kalanamak-rice': {
      protein: '8.5g',
      fiber: '2.8g',
      iron: '1.8mg',
      zinc: '2.1mg',
      carbs: '78g',
      calories: '345'
    },
    'makhana': {
      protein: '9.7g',
      fiber: '14.5g',
      calcium: '60mg',
      magnesium: '210mg',
      carbs: '76.9g',
      calories: '347'
    },
    'khapli-wheat': {
      protein: '12.1g',
      fiber: '11.5g',
      iron: '3.2mg',
      magnesium: '138mg',
      carbs: '71.2g',
      calories: '329'
    }
  };

  const tabs = [
    { id: 'description', name: 'Description' },
    { id: 'nutrition', name: 'Nutrition Facts' },
    { id: 'traceability', name: 'Traceability' },
    { id: 'reviews', name: 'Reviews' }
  ];

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/products"
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg overflow-hidden border-2 border-green-600">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden opacity-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden opacity-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-600 font-medium">{product.origin}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-500 ml-2">({product.rating}/5)</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹{product.price}
                <span className="text-lg text-gray-500 font-normal">/{product.unit}</span>
              </div>
              <p className="text-sm text-gray-500">Inclusive of all taxes • Free shipping above ₹500</p>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <span className="text-xs font-medium text-green-700">100% Organic</span>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-medium text-blue-700">GI Tagged</span>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <QrCode className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <span className="text-xs font-medium text-amber-700">Traceable</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-medium text-gray-900">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    {product.fullDescription || product.description}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Sourced directly from {product.origin}</li>
                    <li>100% organic and pesticide-free</li>
                    <li>Traditional farming methods</li>
                    <li>Premium quality assurance</li>
                    <li>Eco-friendly packaging</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrition Facts</h3>
                <p className="text-sm text-gray-500 mb-4">Per 100g serving</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {nutritionFacts[product.id as keyof typeof nutritionFacts] && 
                    Object.entries(nutritionFacts[product.id as keyof typeof nutritionFacts]).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="font-semibold text-lg text-gray-900">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key === 'carbs' ? 'Carbohydrates' : key}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )}

            {activeTab === 'traceability' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Traceability</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full p-2">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Farm Location</h4>
                      <p className="text-gray-600">{product.origin}</p>
                      <p className="text-sm text-gray-500">Coordinates: 26.7606° N, 83.3732° E</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Certification</h4>
                      <p className="text-gray-600">Organic India Certification</p>
                      <p className="text-sm text-gray-500">Certificate ID: OIC-2024-{product.id.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-600 text-white rounded-full p-2">
                      <QrCode className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">QR Code Tracking</h4>
                      <p className="text-gray-600">Scan the QR code on your package for complete journey details</p>
                      <div className="mt-2 inline-block bg-gray-100 p-4 rounded-lg">
                        <QrCode className="h-16 w-16 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold text-gray-900 mr-3">Anjali Sharma</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">
                          "Absolutely authentic taste! You can really feel the difference in quality. Will definitely order again."
                        </p>
                        <p className="text-sm text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                        R
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold text-gray-900 mr-3">Rakesh Kumar</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-amber-500 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">
                          "Great packaging and fast delivery. The product quality is excellent as described."
                        </p>
                        <p className="text-sm text-gray-500">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;