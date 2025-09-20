import React from 'react';
import { Users, Target, Eye, Heart, MapPin, Award, Handshake, Leaf } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Authenticity',
      description: 'Sourcing from the original agro-climatic zones where products naturally thrive.'
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: 'Quality',
      description: 'Rigorous quality checks from farm to fork ensuring premium standards.'
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-500" />,
      title: 'Farmer Empowerment',
      description: 'Ensuring fair prices and sustainable partnerships with our farming communities.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: 'Transparency',
      description: 'Using technology to offer complete traceability to our customers.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Verma',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Agriculture expert with 15+ years in sustainable farming and rural development.'
    },
    {
      name: 'Priya Singh',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Supply chain specialist focused on connecting farmers with technology.'
    },
    {
      name: 'Amit Kumar',
      position: 'Technology Lead',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      description: 'Building innovative solutions for agricultural traceability and transparency.'
    }
  ];

  return (
    <div className="py-8 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About Matrbhoomi Agtech
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Building a transparent and ethical bridge between India's dedicated farmers and discerning consumers, delivering authentic, single-origin organic products while enhancing rural livelihoods.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg"
                alt="Indian farming"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Target className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To build a transparent and ethical bridge between India's dedicated farmers and discerning consumers, delivering authentic, single-origin organic products while enhancing rural livelihoods through technology-driven solutions.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Eye className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become India's most trusted D2C brand for organic and authentic regional foods, powered by a fully integrated and technology-driven supply chain that empowers farmers and delights consumers nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from sourcing to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Matrbhoomi Agtech was born from a simple yet powerful idea: what if consumers could access the authentic flavors of India's traditional agricultural regions directly from their source, the "motherland" where they naturally thrive?
                </p>
                <p>
                  Our journey began when we witnessed the disconnect between India's rich agricultural heritage and urban consumers who yearned for authentic, quality produce. We saw farmers with generations of knowledge growing exceptional products, but struggling to reach consumers who would truly appreciate their craft.
                </p>
                <p>
                  By leveraging India's digital agricultural infrastructure and building direct partnerships with Farmer Producer Organizations (FPOs), we've created a transparent supply chain that benefits everyone - farmers get fair prices, consumers get authentic products, and the traditional knowledge of our agricultural regions is preserved and celebrated.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4113762/pexels-photo-4113762.jpeg"
                alt="Farmers working"
                className="rounded-xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg"
                alt="Organic produce"
                className="rounded-xl shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4198367/pexels-photo-4198367.jpeg"
                alt="Rice fields"
                className="rounded-xl shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg"
                alt="Wheat fields"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals working to revolutionize India's agricultural supply chain
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Creating positive change across India's agricultural landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">500+</div>
              <div className="text-green-100">Partner Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">5</div>
              <div className="text-green-100">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">10,000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">₹50L+</div>
              <div className="text-green-100">Farmer Income Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We source products from their traditional growing regions across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uttar Pradesh</h3>
              <p className="text-gray-600 mb-2">Terai Region • Bundelkhand</p>
              <p className="text-sm text-gray-500">Kalanamak Rice, Organic Wheat</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bihar</h3>
              <p className="text-gray-600 mb-2">Mithila Region</p>
              <p className="text-sm text-gray-500">Premium Makhana (Fox Nuts)</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Madhya Pradesh</h3>
              <p className="text-gray-600 mb-2">Bundelkhand</p>
              <p className="text-sm text-gray-500">Khapli Wheat, Organic Pulses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;