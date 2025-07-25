import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
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
    message: '',
    isLoading: false
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
    setFormStatus({ submitted: false, success: false, message: '', isLoading: true });

    try {
      console.log('Submitting contact form...');
      
      // Uncomment the following code once the API is deployed
      /*
      // Use the contact API endpoint
      const apiUrl = 'https://tina-realtor-contact-api.vercel.app/contact';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response received:', response.status);
      
      // Get the response text first
      const responseText = await response.text();
      console.log('Response text:', responseText.substring(0, 200));
      
      // Try to parse it as JSON
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        result = { 
          error: 'Could not parse server response', 
          details: responseText.substring(0, 200)
        };
      }

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! We will get back to you shortly.',
          isLoading: false
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
        console.error('Form submission failed:', result);
        setFormStatus({
          submitted: true,
          success: false,
          message: result.error || `Server error (${response.status}). Please try again later.`,
          isLoading: false
        });
      }
      */
      
      // Temporary solution: Just simulate a successful submission
      // Remove this code once the API is deployed
      console.log('Form data:', formData);
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate a successful submission
      console.log('Form submitted successfully');
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you shortly.',
        isLoading: false
      });
      setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          interest: '',
          message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Network error while submitting the form. Please check your connection and try again.',
        isLoading: false
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
              Contact Tina O'Dell
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Ready to start your real estate journey? I'm here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-secondary-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-6">Send a Message</h2>
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
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">Phone</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-secondary-700">I'm interested in...</label>
                  <select name="interest" id="interest" value={formData.interest} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-secondary-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select an option</option>
                    <option value="Buying">Buying a home</option>
                    <option value="Selling">Selling a home</option>
                    <option value="CMA">Requesting a CMA</option>
                    <option value="General">General inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700">Message</label>
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={formStatus.isLoading}
                    className={`w-full bg-primary-600 text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${formStatus.isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus.isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 rounded-full p-3 flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">Phone</h3>
                    <p className="text-secondary-600">(503) 555-0123</p>
                    <p className="text-sm text-secondary-500">Available 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 rounded-full p-3 flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">Email</h3>
                    <p className="text-secondary-600">tina@tinaodell.com</p>
                    <p className="text-sm text-secondary-500">I'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 rounded-full p-3 flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">Service Area</h3>
                    <p className="text-secondary-600">Washington & Oregon</p>
                    <p className="text-sm text-secondary-500">Licensed in both states</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Why Work With Me?
                </h3>
                <ul className="space-y-2 text-primary-800">
                  <li>• 10+ years of local market experience</li>
                  <li>• Personalized service tailored to your needs</li>
                  <li>• Expert negotiation and market analysis</li>
                  <li>• Full-service support from search to closing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 