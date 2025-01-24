import React from 'react';
import ChatbotIcon from './ChatbotIcon'; // Import the chatbot icon component

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* Content of the page */}
      {children}

      {/* Chatbot Icon */}
      <ChatbotIcon />
    </div>
  );
};

export default Layout;
