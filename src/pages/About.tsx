import React from 'react';
import { Mail, Phone, Award, MapPin } from 'lucide-react';
import headshot from '../assets/Headshot1.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
                About Tina O'Dell
              </h1>
              <div className="text-lg text-secondary-600 mb-6 space-y-4">
                <p>
                  As a proud Pacific Northwest Native, I've had the privilege of helping buyers and sellers
                  navigate the local real estate market since 2015. My approach is rooted in genuine
                  care, and a deep commitment to understanding and prioritizing the clients' needs-
                  because for me, real estate is about more than transactions, it's about connections and
                  relationships.
                </p>
                <p>
                  With over a decade of experience, I bring not only a strong market knowledge, but
                  also a calm, steady presence during what can be a significant life transition.
                  Whether you are buying your first home, selling a cherished property, or looking for the
                  perfect investment, I'm here to guide you every step of the way with honesty, integrity
                  and attention to detail.
                </p>
                <p>
                  Outside of real estate, I love spending time with my four amazing kids and four beautiful
                  grandkids. I'm also passionate about photography, hiking the trails of our stunning
                  region, and giving old furniture new life through refinishing projects.
                </p>
                <p className="font-semibold text-primary-600">
                  Let's connect- YOUR goals are my PRIORITY.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:tina@tinaodell.com"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  <Mail size={20} />
                  <span>tina@tinaodell.com</span>
                </a>
                <a
                  href="tel:503-555-0123"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  <Phone size={20} />
                  <span>(503) 555-0123</span>
                </a>
              </div>
            </div>
            <div className="bg-secondary-200 rounded-lg h-96 flex items-center justify-center p-4">
              <img src={headshot} alt="Tina O'Dell" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-8 text-center">
            Credentials & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Licensed Professional
              </h3>
              <p className="text-secondary-600">
                Licensed realtor in Washington and Oregon with active MLS access
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Local Expert
              </h3>
              <p className="text-secondary-600">
                Deep knowledge of neighborhoods throughout the Pacific Northwest
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Proven Track Record
              </h3>
              <p className="text-secondary-600">
                Successfully closed over 200 transactions in the last 5 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-8 text-center">
            Services I Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                For Buyers
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Comprehensive market analysis</li>
                <li>• Property search and showing coordination</li>
                <li>• Negotiation and offer preparation</li>
                <li>• Transaction management through closing</li>
                <li>• First-time buyer guidance</li>
                <li>• Investment property consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                For Sellers
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Comparative market analysis (CMA)</li>
                <li>• Professional staging consultation</li>
                <li>• Marketing strategy and implementation</li>
                <li>• Professional photography coordination</li>
                <li>• Negotiation and contract management</li>
                <li>• Closing coordination and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 