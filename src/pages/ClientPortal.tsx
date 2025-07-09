import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Trash2, Eye } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const ClientPortal: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<'favorites' | 'profile'>('favorites');

  // Mock favorites data - will be replaced with real data from Firebase
  const [favorites] = useState([
    {
      id: '1',
      address: '123 Oak Street',
      city: 'Portland',
      state: 'OR',
      price: 650000,
      beds: 4,
      baths: 3,
      sqft: 2400,
      dateAdded: '2024-01-15',
      notes: 'Love the kitchen and backyard!'
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
      dateAdded: '2024-01-10',
      notes: 'Great location, close to downtown'
    }
  ]);

  const removeFavorite = (id: string) => {
    // TODO: Implement remove favorite functionality
    console.log('Remove favorite:', id);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-4">
              Welcome Back!
            </h1>
            <p className="text-lg text-secondary-600">
              Hello {currentUser?.email}, manage your saved listings and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              Favorite Listings ({favorites.length})
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              Profile Settings
            </button>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'favorites' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif font-bold text-secondary-900">
                  Your Favorite Listings
                </h2>
                <div className="text-sm text-secondary-600">
                  {favorites.length} saved properties
                </div>
              </div>

              {favorites.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="mx-auto h-12 w-12 text-secondary-400 mb-4" />
                  <h3 className="text-lg font-medium text-secondary-900 mb-2">
                    No favorites yet
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    Start browsing listings to save your favorites
                  </p>
                  <a
                    href="/listings"
                    className="btn-primary"
                  >
                    Browse Listings
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {favorites.map((listing) => (
                    <div key={listing.id} className="card">
                      <div className="h-48 bg-secondary-200 rounded-t-lg flex items-center justify-center">
                        <span className="text-secondary-500">Property Photo</span>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center text-secondary-600">
                            <MapPin size={16} className="mr-1" />
                            <span className="text-sm">{listing.city}, {listing.state}</span>
                          </div>
                          <span className="text-xs text-secondary-500">
                            Added {new Date(listing.dateAdded).toLocaleDateString()}
                          </span>
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

                        {listing.notes && (
                          <div className="mb-4 p-3 bg-primary-50 rounded-lg">
                            <p className="text-sm text-primary-800">
                              <strong>Your notes:</strong> {listing.notes}
                            </p>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary-600">
                            ${listing.price.toLocaleString()}
                          </span>
                          <div className="flex space-x-2">
                            <button className="btn-secondary flex items-center space-x-1">
                              <Eye size={16} />
                              <span>View</span>
                            </button>
                            <button
                              onClick={() => removeFavorite(listing.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-8">
                Profile Settings
              </h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-secondary-200">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={currentUser?.email || ''}
                      disabled
                      className="input-field bg-secondary-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={currentUser?.displayName || ''}
                      className="input-field"
                      placeholder="Enter your display name"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                      Notification Preferences
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-secondary-700">
                          Email me about new listings that match my criteria
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-secondary-700">
                          Email me about price changes on my favorites
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientPortal; 