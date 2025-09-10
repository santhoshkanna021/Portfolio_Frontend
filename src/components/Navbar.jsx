import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaConnectdevelop, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", path: "/About" },
    { name: "Work", path: "/Work" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <motion.div 
      className="flex items-center justify-between p-5 bg-black text-gray-400 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
          <NavLink to="/" className="hover:text-[#BE5204]">
            <FaConnectdevelop size={28} />
          </NavLink>
        </motion.div>

        {/* Desktop Links */}
        <nav className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.1 }}>
              <NavLink to={link.path} className="hover:text-[#BE5204]">{link.name}</NavLink>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex space-x-4 ">
          <motion.button className='hover:text-[#BE5204]' whileHover={{ scale: 1.2 }} onClick={() => window.open("https://github.com/santhoshkanna021", "_blank")}>
            <FiGithub size={24} />
          </motion.button>
          <motion.button className='hover:text-[#BE5204]'  whileHover={{ scale: 1.2 }} onClick={() => window.open("https://www.linkedin.com/in/santhoshkanna021/", "_blank")}>
            <FaLinkedinIn size={24} />
          </motion.button>
          <motion.button className='hover:text-[#BE5204]' whileHover={{ scale: 1.2 }} onClick={() => window.location = "mailto:santhoshkannar802@gmail.com"}>
            <MdMarkEmailUnread size={24} />
          </motion.button>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black text-center sm:hidden max-h-screen overflow-auto z-40"
          >
            <nav className="flex flex-col py-4 space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#BE5204]"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700">
                <button className="hover:text-[#BE5204]" onClick={() => window.open("https://github.com/yourusername", "_blank")}>
                  <FiGithub size={24} />
                </button>
                <button className="hover:text-[#BE5204]" onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}>
                  <FaLinkedinIn size={24} />
                </button>
                <button className="hover:text-[#BE5204]" onClick={() => window.location = "mailto:youremail@example.com"}>
                  <MdMarkEmailUnread size={24} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
