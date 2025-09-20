import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, Users, QrCode, Star, MapPin, Award } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Authentic Origins',
      description: 'Products sourced directly from their native regions for unmatched authenticity and flavor.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Premium Quality',
      description: 'Rigorous quality checks from farm to fork, ensuring only the finest products reach you.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Farmer Empowerment',
      description: 'Direct partnerships with FPOs ensuring fair prices and sustainable livelihoods for farmers.'
    },
    {
      icon: <QrCode className="h-8 w-8 text-green-600" />,
      title: 'Full Traceability',
      description: 'QR codes on every package reveal the complete journey of your product from field to table.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'The Kalanamak rice is absolutely authentic! You can taste the difference immediately. Highly recommended!'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Fresh makhana delivered right to my doorstep. The packaging tells a beautiful story of the farmers.'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Finally found a brand that truly cares about quality and farmer welfare. Will order again!'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Authentic flavours, delivered directly from the
                <span className="text-amber-300"> motherland</span>
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Experience the true taste of India with our premium organic products, sourced directly from their native regions and delivered fresh to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/4113762/pexels-photo-4113762.jpeg"
                  alt="Organic farming"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-300">500+</div>
                    <div className="text-sm text-green-100">Partner Farmers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-300">100%</div>
                    <div className="text-sm text-green-100">Organic</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-300">5 States</div>
                    <div className="text-sm text-green-100">Sourcing Regions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Matrbhoomi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another e-commerce platform. We're building a bridge between authentic Indian agriculture and conscious consumers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our curated selection of premium organic products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kalanamak Rice */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/4198367/pexels-photo-4198367.jpeg"
                alt="Kalanamak Rice"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Siddharthnagar, UP</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">GI Tagged Kalanamak Rice</h3>
                <p className="text-gray-600 mb-4">
                  Ancient variety with low glycemic index, high in protein, iron, and zinc. Perfect for diabetics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹180/kg</span>
                  <Link
                    to="/product/kalanamak-rice"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Makhana */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg"
                alt="Makhana"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Mithila, Bihar</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Makhana (Fox Nuts)</h3>
                <p className="text-gray-600 mb-4">
                  Heart-healthy, high-fiber snack that supports weight management and digestive health.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹350/kg</span>
                  <Link
                    to="/product/makhana"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Organic Wheat */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg"
                alt="Organic Wheat"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Bundelkhand, MP/UP</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Organic Khapli Wheat</h3>
                <p className="text-gray-600 mb-4">
                  Ancient wheat variety with lower gluten content and high nutritional value.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹75/kg</span>
                  <Link
                    to="/product/khapli-wheat"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience Authentic Indian Flavors?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of customers who trust Matrbhoomi for premium organic products
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;