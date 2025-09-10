import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaConnectdevelop, FaBars, FaTimes } from "react-icons/fa";
import { m as Motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", path: "/About" },
    { name: "Work", path: "/Work" },
    { name: "Contact", path: "/Contact" },
  ];

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" }
  };

  return (
    <div className="flex items-center justify-between p-5 bg-black text-gray-400 sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <NavLink to="/" className="hover:text-[#BE5204]">
          <FaConnectdevelop size={28} />
        </NavLink>

        {/* Desktop Links */}
        <nav className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path} className="hover:text-[#BE5204]">
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex space-x-4">
          <button className="hover:text-[#BE5204]" onClick={() => window.open("https://github.com/santhoshkanna021", "_blank")}>
            <FiGithub size={24} />
          </button>
          <button className="hover:text-[#BE5204]" onClick={() => window.open("https://www.linkedin.com/in/santhoshkanna021/", "_blank")}>
            <FaLinkedinIn size={24} />
          </button>
          <button className="hover:text-[#BE5204]" onClick={() => window.location = "mailto:santhoshkannar802@gmail.com"}>
            <MdMarkEmailUnread size={24} />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-black text-center p-4 z-40"
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
                <button className="hover:text-[#BE5204]" onClick={() => window.open("https://github.com/santhoshkanna021", "_blank")}>
                  <FiGithub size={24} />
                </button>
                <button className="hover:text-[#BE5204]" onClick={() => window.open("https://linkedin.com/in/santhoshkanna021/", "_blank")}>
                  <FaLinkedinIn size={24} />
                </button>
                <button className="hover:text-[#BE5204]" onClick={() => window.location = "mailto:santhoshkannar802@gmail.com"}>
                  <MdMarkEmailUnread size={24} />
                </button>
              </div>
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
