import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home as HomeIcon, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Professional real estate services in Washington and Oregon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/listings"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Browse Listings
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              Why Choose Tina Odell?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              With years of experience in the Pacific Northwest real estate market, 
              I'm committed to helping you achieve your real estate goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Market Expertise
              </h3>
              <p className="text-secondary-600">
                Deep knowledge of Washington and Oregon markets
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HomeIcon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Full Service
              </h3>
              <p className="text-secondary-600">
                Complete support from search to closing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Proven Results
              </h3>
              <p className="text-secondary-600">
                Track record of successful transactions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Client Focused
              </h3>
              <p className="text-secondary-600">
                Personalized service tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-secondary-600">
              Discover some of the finest homes available in the Pacific Northwest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured properties */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="h-48 bg-secondary-200 rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Beautiful Family Home
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    Portland, OR • 4 bed • 3 bath • 2,400 sq ft
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">
                      $650,000
                    </span>
                    <Link
                      to="/listings"
                      className="btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/listings"
              className="btn-outline"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's start your real estate journey today
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 