import React, { useState } from 'react';

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
      // Integration with Cloze CRM - send form data to odellhomesales@gmail.com
      console.log('Form data being submitted:', {
        ...formData,
        recipientEmail: 'odellhomesales@gmail.com'
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
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
        message: 'An error occurred. Please try again later.',
        isLoading: false
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
            <input 
              type="text" 
              name="firstName" 
              id="home-firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="home-lastName" className="block text-sm font-medium text-secondary-700">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="home-lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="home-email" className="block text-sm font-medium text-secondary-700">Email</label>
          <input 
            type="email" 
            name="email" 
            id="home-email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label htmlFor="home-phone" className="block text-sm font-medium text-secondary-700">Phone</label>
          <input 
            type="tel" 
            name="phone" 
            id="home-phone" 
            value={formData.phone} 
            onChange={handleChange}
            placeholder="+1 (360) 270-4160"
            className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label htmlFor="home-interest" className="block text-sm font-medium text-secondary-700">I'm interested in...</label>
          <select 
            name="interest" 
            id="home-interest" 
            value={formData.interest} 
            onChange={handleChange} 
            required 
            className="mt-1 block w-full px-3 py-2 border border-secondary-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select an option</option>
            <option value="buying">Buying a home</option>
            <option value="selling">Selling my home</option>
            <option value="both">Both buying and selling</option>
            <option value="investing">Investment properties</option>
          </select>
        </div>
        <div>
          <label htmlFor="home-message" className="block text-sm font-medium text-secondary-700">Message</label>
          <textarea 
            name="message" 
            id="home-message" 
            rows={4} 
            value={formData.message} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          ></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            disabled={formStatus.isLoading}
            className="w-full bg-primary-600 text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formStatus.isLoading ? (
              <>
                <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Processing...
              </>
            ) : 'Get Started'}
          </button>
        </div>
      </form>
    </>
  );
};

export default HomeContactForm; 