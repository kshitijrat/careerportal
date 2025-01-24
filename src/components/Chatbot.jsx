import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import "../csss/ChatbotIcon.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Toggle chatbot visibility
  const toggleChatbot = () => setIsOpen(!isOpen);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    const botResponse = {
      sender: "bot",
      text: "This is a static response. Thank you for your message!",
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setUserInput(""); // Clear input field
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <MessageCircle className="chatbot-icon__icon" />
      </div>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button onClick={toggleChatbot}>&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
