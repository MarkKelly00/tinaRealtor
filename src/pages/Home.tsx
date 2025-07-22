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
            <h2 className="text-4xl font-serif font-bold text-secondary-900 mb-4">
              Are You Interested in Buying or Selling a Home?
            </h2>
            <p className="text-lg text-secondary-600">
              Get started with a free consultation
            </p>
          </div>
          <div className="bg-secondary-50 p-8 rounded-lg shadow-md">
            <HomeContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const HomeContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    
      const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus({ submitted: false, success: false, message: '' });
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          const result = await response.json();
    
          if (response.ok) {
            setFormStatus({
              submitted: true,
              success: true,
              message: 'Thank you for your message! We will get back to you shortly.'
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                interest: '',
                message: ''
            });
          } else {
            setFormStatus({
              submitted: true,
              success: false,
              message: result.error || 'An unexpected error occurred. Please try again.'
            });
          }
        } catch (error) {
          setFormStatus({
            submitted: true,
            success: false,
            message: 'An error occurred while submitting the form. Please check your connection and try again.'
          });
        }
      };
    
      return (
        <>
            {formStatus.submitted && (
                <div 
                  className={`p-4 mb-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  role="alert"
                >
                  {formStatus.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                <label htmlFor="home-firstName" className="block text-sm font-medium text-secondary-700">First Name</label>
                <input type="text" name="firstName" id="home-firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                </div>
                <div>
                <label htmlFor="home-lastName" className="block text-sm font-medium text-secondary-700">Last Name</label>
                <input type="text" name="lastName" id="home-lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                </div>
            </div>
            <div>
                <label htmlFor="home-email" className="block text-sm font-medium text-secondary-700">Email</label>
                <input type="email" name="email" id="home-email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
            </div>
            <div>
                <label htmlFor="home-phone" className="block text-sm font-medium text-secondary-700">Phone</label>
                <input type="tel" name="phone" id="home-phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
            </div>
            <div>
                <label htmlFor="home-interest" className="block text-sm font-medium text-secondary-700">I'm interested in...</label>
                <select name="interest" id="home-interest" value={formData.interest} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                <option value="">Select an option</option>
                <option value="Buying">Buying a home</option>
                <option value="Selling">Selling a home</option>
                <option value="CMA">Requesting a CMA</option>
                <option value="General">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-secondary-700">Message</label>
                <textarea name="message" id="home-message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            <div>
                <button type="submit" className="w-full bg-primary-600 text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Get Started
                </button>
            </div>
            </form>
        </>
      );
}

export default Home; 