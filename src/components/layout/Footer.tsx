import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tina Odell</h3>
            <p className="text-sm mb-4">
              Licensed Real Estate Professional in Washington and Oregon
            </p>
            <p className="text-sm">
              Helping families find their perfect home with personalized service and expert 
              market knowledge throughout the Pacific Northwest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-sm hover:text-white transition-colors">
                  Listings
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-sm hover:text-white transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Buyer Representation</li>
              <li>Seller Representation</li>
              <li>Market Analysis</li>
              <li>Property Valuation</li>
              <li>Investment Properties</li>
              <li>Relocation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">(360) 270-4160</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:odellhomesales@gmail.com" className="text-sm hover:text-white transition-colors">
                    odellhomesales@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Serving Washington & Oregon
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-400">
              © {new Date().getFullYear()} Tina Odell Real Estate. All rights reserved.
            </p>
            <p className="text-sm text-secondary-400 mt-2 md:mt-0">
              Licensed in Washington & Oregon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 