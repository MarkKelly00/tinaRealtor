import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Tina Odell
            </h3>
            <p className="text-secondary-300 mb-4">
              Licensed Real Estate Professional in Washington and Oregon
            </p>
            <p className="text-secondary-300 mb-6">
              Helping families find their perfect home with personalized service 
              and expert market knowledge throughout the Pacific Northwest.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-secondary-300">(503) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-secondary-300">tina@tinaodell.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-secondary-300">Serving Washington & Oregon</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-secondary-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/listings" className="block text-secondary-300 hover:text-white transition-colors">
                Listings
              </Link>
              <Link to="/about" className="block text-secondary-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-secondary-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/client-portal" className="block text-secondary-300 hover:text-white transition-colors">
                Client Portal
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>Buyer Representation</li>
              <li>Seller Representation</li>
              <li>Market Analysis</li>
              <li>Property Valuation</li>
              <li>Investment Properties</li>
              <li>Relocation Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 Tina Odell Real Estate. All rights reserved.</p>
            <p className="mt-1">Licensed in Washington & Oregon</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-secondary-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 