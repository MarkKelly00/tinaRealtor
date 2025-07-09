import React from 'react';
import { Search, Filter, MapPin, Bed, Bath, Square } from 'lucide-react';

const Listings: React.FC = () => {
  // Placeholder data - will be replaced with IDX Broker integration
  const sampleListings = [
    {
      id: '1',
      address: '123 Oak Street',
      city: 'Portland',
      state: 'OR',
      price: 650000,
      beds: 4,
      baths: 3,
      sqft: 2400,
      image: '/api/placeholder/400/300'
    },
    {
      id: '2',
      address: '456 Pine Avenue',
      city: 'Seattle',
      state: 'WA',
      price: 750000,
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: '/api/placeholder/400/300'
    },
    {
      id: '3',
      address: '789 Maple Drive',
      city: 'Vancouver',
      state: 'WA',
      price: 550000,
      beds: 3,
      baths: 2,
      sqft: 1600,
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
              Available Listings
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover your perfect home from our current listings in Washington and Oregon
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-secondary-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by city, address, or MLS#"
                  className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Price Range</option>
                <option value="0-300000">Under $300,000</option>
                <option value="300000-500000">$300,000 - $500,000</option>
                <option value="500000-750000">$500,000 - $750,000</option>
                <option value="750000+">$750,000+</option>
              </select>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Bedrooms</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Filter size={16} />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IDX Broker Integration Notice */}
      <section className="py-8 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              🚧 IDX Broker Integration Coming Soon
            </h3>
            <p className="text-primary-800">
              This page will be integrated with IDX Broker to display live RMLS listings. 
              The search and filter functionality will connect to the MLS database to show 
              real-time property information.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-secondary-900">
              Sample Listings
            </h2>
            <span className="text-secondary-600">
              {sampleListings.length} properties found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleListings.map((listing) => (
              <div key={listing.id} className="card hover:shadow-lg transition-shadow">
                <div className="h-48 bg-secondary-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-secondary-500">Property Photo</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-secondary-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{listing.city}, {listing.state}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {listing.address}
                  </h3>
                  <div className="flex items-center space-x-4 text-secondary-600 mb-4">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span className="text-sm">{listing.beds} bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span className="text-sm">{listing.baths} bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      <span className="text-sm">{listing.sqft.toLocaleString()} sq ft</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">
                      ${listing.price.toLocaleString()}
                    </span>
                    <button className="btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings; 