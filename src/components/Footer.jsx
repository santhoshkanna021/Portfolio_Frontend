import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="w-full bg-[#0D0D0D] text-gray-400 py-6 px-4 sm:px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        
        {/* Left Section */}
        <h1 className="hover:text-[#BE5204] text-center sm:text-left">
          © Santhoshkanna
        </h1>

        {/* Navigation Links */}
        <nav className="sm:flex space-x-4 sm:space-x-6">
          <NavLink to="/About" className="hover:text-[#BE5204]">
            About
          </NavLink>
          <NavLink to="/Work" className="hover:text-[#BE5204]">
            Work
          </NavLink>
          <NavLink to="/Contact" className="hover:text-[#BE5204]">
            Contact
          </NavLink>
        </nav>

      </div>
    </motion.div>
  );
};

export default Footer;
