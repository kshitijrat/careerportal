import React, { useState } from 'react';
import Navigation from './Navigation'; // Import Navigation component
import ChatbotIcon from './ChatbotIcon'; // Chatbot Icon Component

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div className="relative">
      {/* Navigation Component */}
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <div className={`pt-16 ${isMenuOpen ? 'ml-0' : 'ml-16'} transition-all`}>
        {children} {/* Content passed to the layout */}
      </div>

      {/* Chatbot Icon */}
      <ChatbotIcon />
    </div>
  );
};

export default Layout;
