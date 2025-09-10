import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen flex flex-col px-[200px]">
        
        {/* Navbar always shown at the top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
        </main>

        {/* Footer always shown at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
