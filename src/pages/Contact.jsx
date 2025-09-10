import React, { useState } from 'react';
import { motion } from "framer-motion";

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
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black">
      <motion.form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-gray-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-3xl text-[#BE5204] font-bold mb-6 text-center">Contact Me</h1>

        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Name</label>
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
          <label className="block mb-2 text-gray-300">Email</label>
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
          <label className="block mb-2 text-gray-300">Subject</label>
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
          <label className="block mb-2 text-gray-300">Message</label>
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

        <motion.button 
          type="submit"
          className="w-1/2 bg-[#BE5204] text-white py-3 rounded-3xl font-semibold transition duration-300 mx-auto block"
          variants={buttonVariants}
          whileHover="hover"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
