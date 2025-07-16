import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Printer,
  X,
  Phone,
  Mail
} from 'lucide-react';

interface ListingDetail {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  yearBuilt: number;
  lotSize: string;
  propertyType: string;
  status: string;
  description: string;
  features: string[];
  images: string[];
  virtualTourUrl?: string;
  mlsNumber: string;
  listingAgent: {
    name: string;
    phone: string;
    email: string;
  };
}

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Mock data - will be replaced with API call
  const listing: ListingDetail = {
    id: id || '1',
    title: 'Stunning Waterfront Estate',
    address: '5115 150th Street SE',
    city: 'Bellevue',
    state: 'WA',
    zip: '98006',
    price: 2850000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    garage: 3,
    yearBuilt: 2018,
    lotSize: '0.75 acres',
    propertyType: 'Single Family Home',
    status: 'Active',
    description: `Welcome to this exceptional waterfront estate nestled in the heart of Bellevue. This stunning contemporary home offers breathtaking views of Lake Washington and the Olympic Mountains. 

    The grand entrance leads to an open-concept living space with soaring ceilings and floor-to-ceiling windows that flood the home with natural light. The gourmet kitchen features top-of-the-line appliances, custom cabinetry, and a large center island perfect for entertaining.

    The luxurious master suite includes a spa-like bathroom, walk-in closet, and private balcony overlooking the water. Four additional bedrooms provide ample space for family and guests.

    Outdoor living is at its finest with expansive decks, a covered patio with outdoor kitchen, and private beach access. The professionally landscaped grounds include mature trees and gardens.

    Additional features include a home theater, wine cellar, home office, and smart home technology throughout. This is truly a rare opportunity to own one of Bellevue's finest waterfront properties.`,
    features: [
      'Waterfront',
      'Private Beach Access',
      'Gourmet Kitchen',
      'Home Theater',
      'Wine Cellar',
      'Smart Home Technology',
      'Outdoor Kitchen',
      'Three-Car Garage',
      'Security System',
      'Radiant Floor Heating',
      'Central Air Conditioning',
      'Hardwood Floors'
    ],
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    virtualTourUrl: 'https://example.com/virtual-tour',
    mlsNumber: 'MLS2110240',
    listingAgent: {
      name: 'Tina Odell',
      phone: '(360) 270-4160',
      email: 'odellhomesales@gmail.com'
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <div className="bg-white">
      {/* Header with back button */}
      <div className="bg-secondary-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/listings" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft size={20} className="mr-2" />
            Back to Listings
          </Link>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="relative">
        <div className="relative h-[600px] bg-secondary-100">
          <img 
            src={listing.images[currentImageIndex]} 
            alt={`${listing.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          />
          
          {/* Image Navigation */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {listing.images.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
              <Heart size={20} />
            </button>
            <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
              <Share2 size={20} />
            </button>
            <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
              <Printer size={20} />
            </button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="bg-secondary-900 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-2 overflow-x-auto">
              {listing.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 overflow-hidden rounded ${
                    index === currentImageIndex ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Price */}
              <div>
                <h1 className="text-3xl font-serif font-bold text-secondary-900 mb-2">
                  {listing.title}
                </h1>
                <p className="text-lg text-secondary-600 flex items-center mb-4">
                  <MapPin size={20} className="mr-2" />
                  {listing.address}, {listing.city}, {listing.state} {listing.zip}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-primary-600">
                    ${listing.price.toLocaleString()}
                  </span>
                  <span className="ml-4 text-secondary-600">
                    ${Math.round(listing.price / listing.sqft)}/sqft
                  </span>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-secondary-50 p-4 rounded-lg text-center">
                  <Bed className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-2xl font-semibold text-secondary-900">{listing.beds}</p>
                  <p className="text-sm text-secondary-600">Bedrooms</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg text-center">
                  <Bath className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-2xl font-semibold text-secondary-900">{listing.baths}</p>
                  <p className="text-sm text-secondary-600">Bathrooms</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg text-center">
                  <Square className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-2xl font-semibold text-secondary-900">{listing.sqft.toLocaleString()}</p>
                  <p className="text-sm text-secondary-600">Sq Ft</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg text-center">
                  <Car className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-2xl font-semibold text-secondary-900">{listing.garage}</p>
                  <p className="text-sm text-secondary-600">Garage</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                  Property Description
                </h2>
                <div className="prose prose-lg text-secondary-600 whitespace-pre-line">
                  {listing.description}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                  Property Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {listing.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-3 border-b border-secondary-200">
                    <span className="text-secondary-600">Property Type</span>
                    <span className="font-medium text-secondary-900">{listing.propertyType}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-200">
                    <span className="text-secondary-600">Year Built</span>
                    <span className="font-medium text-secondary-900">{listing.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-200">
                    <span className="text-secondary-600">Lot Size</span>
                    <span className="font-medium text-secondary-900">{listing.lotSize}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-200">
                    <span className="text-secondary-600">MLS #</span>
                    <span className="font-medium text-secondary-900">{listing.mlsNumber}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-200">
                    <span className="text-secondary-600">Status</span>
                    <span className="font-medium text-green-600">{listing.status}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-200">
                    <span className="text-secondary-600">Price per Sq Ft</span>
                    <span className="font-medium text-secondary-900">
                      ${Math.round(listing.price / listing.sqft)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Agent Card */}
                <div className="bg-white rounded-lg shadow-lg border border-secondary-200 p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    Contact Listing Agent
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p className="font-medium text-secondary-900">{listing.listingAgent.name}</p>
                    <a 
                      href={`tel:${listing.listingAgent.phone}`}
                      className="flex items-center text-primary-600 hover:text-primary-700"
                    >
                      <Phone size={16} className="mr-2" />
                      {listing.listingAgent.phone}
                    </a>
                    <a 
                      href={`mailto:${listing.listingAgent.email}`}
                      className="flex items-center text-primary-600 hover:text-primary-700"
                    >
                      <Mail size={16} className="mr-2" />
                      {listing.listingAgent.email}
                    </a>
                  </div>
                  <button 
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium"
                  >
                    Request Information
                  </button>
                </div>

                {/* Contact Form */}
                {showContactForm && (
                  <div className="bg-white rounded-lg shadow-lg border border-secondary-200 p-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                      I'm Interested in This Property
                    </h4>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <textarea
                        rows={4}
                        placeholder="Message (optional)"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                )}

                {/* Schedule Tour */}
                <div className="bg-primary-50 rounded-lg p-6 text-center">
                  <Calendar className="mx-auto mb-3 text-primary-600" size={32} />
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">
                    Schedule a Tour
                  </h4>
                  <p className="text-primary-700 mb-4">
                    See this property in person
                  </p>
                  <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          <img
            src={listing.images[currentImageIndex]}
            alt={`${listing.title} - Full size`}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListingDetail; 