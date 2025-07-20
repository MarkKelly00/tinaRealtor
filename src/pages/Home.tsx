import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import heroDesktop from '../assets/hoodHero-Desktop.png';
import heroMobile from '../assets/hoodHero-Mobile.png';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: 'Stunning Waterfront Estate',
      location: 'Bellevue, WA',
      price: '$2,850,000',
      beds: 5,
      baths: 4,
      sqft: '4,200',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Modern Downtown Condo',
      location: 'Portland, OR',
      price: '$875,000',
      beds: 2,
      baths: 2,
      sqft: '1,450',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Charming Craftsman Home',
      location: 'Seattle, WA',
      price: '$1,250,000',
      beds: 4,
      baths: 3,
      sqft: '2,800',
      image: '/api/placeholder/600/400'
    }
  ];

  // Testimonials mock data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Mike Johnson',
      text: 'Tina made our home buying experience seamless. Her knowledge of the local market and attention to detail helped us find our dream home.',
      rating: 5
    },
    {
      id: 2,
      name: 'David Chen',
      text: 'As a first-time buyer, I was nervous about the process. Tina guided me every step of the way with patience and expertise.',
      rating: 5
    },
    {
      id: 3,
      name: 'The Williams Family',
      text: 'We couldn\'t have asked for a better realtor. Tina\'s dedication and professionalism made selling our home stress-free.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredProperties.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProperties.length - 1 : prev - 1));
  };

  return (
    <div className="bg-secondary-50">
      {/* Hero Section */}
      <section className="relative bg-white">
        {/* Desktop Hero */}
        <div 
          className="hidden md:block relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroDesktop})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg">
                Find Your Dream Home
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-md">
                Professional Real Estate Services in Washington & Oregon
              </p>
              <div className="w-full">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by city, neighborhood, or ZIP..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-l-md text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-r-md hover:bg-primary-700 transition-colors flex items-center gap-2">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="md:hidden relative bg-primary-900">
          {/* Hero Image Container */}
          <div 
            className="relative h-[400px] bg-cover bg-top"
            style={{
              backgroundImage: `url(${heroMobile})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900" />
          </div>
          
          {/* Text Content Below Image */}
          <div className="bg-primary-900 text-white px-4 pb-8 mt-2 relative z-10">
            <div className="max-w-md mx-auto text-center">
              <h1 className="text-3xl font-serif text-white font-bold mb-2">
                Find Your Dream Home
              </h1>
              <p className="text-base mb-6 text-white">
                Professional Real Estate Services in Washington & Oregon
              </p>
              <div className="w-full">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by city, ZIP..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-l-md text-secondary-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors flex items-center gap-1">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMA Call to Action Section */}
      <section className="bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What's Your Home Worth?</h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation Comparative Market Analysis (CMA) for your home. Understand your property's value in today's market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-md hover:bg-primary-100 transition-colors font-bold text-lg shadow-lg"
          >
            Request Your Free CMA
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-secondary-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-secondary-600">
              Discover exceptional homes in the Pacific Northwest
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProperties.map((property) => (
                  <div key={property.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <div className="h-64 md:h-full bg-gradient-to-br from-secondary-200 to-secondary-300 flex items-center justify-center">
                            <span className="text-secondary-500 text-lg">Property Image</span>
                          </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                          <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-2">
                            {property.title}
                          </h3>
                          <div className="flex items-center text-secondary-600 mb-4">
                            <MapPin size={18} className="mr-2" />
                            <span>{property.location}</span>
                          </div>
                          <p className="text-3xl font-bold text-primary-600 mb-6">
                            {property.price}
                          </p>
                          <div className="flex space-x-6 text-secondary-600 mb-6">
                            <div className="flex items-center">
                              <Bed size={20} className="mr-2" />
                              <span>{property.beds} Beds</span>
                            </div>
                            <div className="flex items-center">
                              <Bath size={20} className="mr-2" />
                              <span>{property.baths} Baths</span>
                            </div>
                            <div className="flex items-center">
                              <Square size={20} className="mr-2" />
                              <span>{property.sqft} Sq Ft</span>
                            </div>
                          </div>
                          <Link
                            to={`/listings/${property.id}`}
                            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/listings"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-secondary-900">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-secondary-900 mb-4">
              Your Trusted Pacific Northwest Realtor
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
              With nearly a decade of experience in the Washington and Oregon real estate markets, I bring not only strong market knowledge but also a calm, steady presence during what can be a significant life transition. I'm here to guide you every step of the way with honesty, integrity, and attention to detail.
            </p>
            <Link 
              to="/about"
              className="btn-outline"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-4 text-center">
              Are You Interested in Buying or Selling a Home?
            </h2>
            <p className="text-lg text-secondary-600 mb-8 text-center">
              Get started with a free consultation
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-2">
                  I'm interested in...
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select an option</option>
                  <option value="buying">Buying a home</option>
                  <option value="selling">Selling my home</option>
                  <option value="both">Both buying and selling</option>
                  <option value="investing">Investment properties</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700 transition-colors font-medium"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 