import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add API calls or email sending logic
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-lg  p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-[#BE5204] font-bold mb-6 text-center">Contact Me</h1>

        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-3xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BE5204]"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-3xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BE5204]"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Subject</label>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-3xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BE5204]"
            placeholder="Subject"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded-3xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BE5204]"
            placeholder="Your message"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-1/2 bg-[#BE5204] text-white py-3 rounded-3xl font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
