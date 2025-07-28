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
        body: JSON.stringify({
          ...formData,
          // Include the correct email for Cloze CRM integration
          recipientEmail: 'odellhomesales@gmail.com'
        })
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
      {/* Hero Section */}
      <section className="py-16 bg-secondary-50">
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

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
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
                    <p className="text-secondary-600">+1 (360) 270-4160</p>
                    <p className="text-sm text-secondary-500">Available 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 rounded-full p-3 flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">Email</h3>
                    <p className="text-secondary-600">odellhomesales@gmail.com</p>
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

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-200">
              <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-6">
                Send Me a Message
              </h2>

              {formStatus.submitted && (
                <div className={`mb-6 p-4 ${formStatus.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border rounded-lg`}>
                  <p className={formStatus.success ? 'text-green-800' : 'text-red-800'}>
                    {formStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (360) 270-4160"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a home</option>
                    <option value="selling">Selling my home</option>
                    <option value="both">Both buying and selling</option>
                    <option value="investing">Investment properties</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Tell me about your real estate needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isLoading}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 