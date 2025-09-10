import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      
      <div>
        <Outlet />  {/* This renders the matched child route */}
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
