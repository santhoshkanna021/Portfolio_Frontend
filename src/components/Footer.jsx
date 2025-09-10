import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-[#0D0D0D] text-gray-400 py-6 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        
        {/* Left Section */}
        <h1 className="hover:text-[#BE5204] text-center sm:text-left">
          © Santhoshkanna
        </h1>

        {/* Navigation Links */}
        <nav className=" sm:flex space-x-4 sm:space-x-6">
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
    </div>
  );
};

export default Footer;
