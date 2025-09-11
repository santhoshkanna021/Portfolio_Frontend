import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <motion.div
      className="w-full bg-black text-gray-400 py-6 px-4 sm:px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold text-white">Stay Connected</h2>
          <p className="text-sm text-gray-400">Building solutions that make a difference.</p>
        </div>

        {/* Right Section – Links and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          
          {/* Navigation Links */}
          <nav className="flex space-x-4">
            <NavLink to="/About" className="hover:text-[#BE5204] text-sm">
              About
            </NavLink>
            <NavLink to="/Work" className="hover:text-[#BE5204] text-sm">
              Work
            </NavLink>
            {/* <NavLink to="/Contact" className="hover:text-[#BE5204] text-sm">
              Contact
            </NavLink> */}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <button className="hover:text-[#BE5204]" onClick={() => window.open("https://github.com/santhoshkanna021", "_blank")}>
              <FiGithub size={20} />
            </button>
            <button className="hover:text-[#BE5204]" onClick={() => window.open("https://www.linkedin.com/in/santhoshkanna021/", "_blank")}>
              <FaLinkedinIn size={20} />
            </button>
            <button className="hover:text-[#BE5204]" onClick={() => window.location = "mailto:santhoshkannar802@gmail.com"}>
              <MdMarkEmailUnread size={20} />
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
