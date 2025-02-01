import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "John", text: "Hey there!" },
    { id: 2, user: "Jane", text: "Hello! How are you?" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const chatEndRef = useRef(null);

  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fake AI response
  const botResponse = (userMessage) => {
    const botReplies = [
      "That's interesting!",
      "Tell me more!",
      "I totally agree!",
      "Wow! Never thought of that.",
      "Let's chat more!"
    ];
    return botReplies[Math.floor(Math.random() * botReplies.length)];
  };

  // Send message & bot reply
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, user: "You", text: newMessage }]);
      setNewMessage("");
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, user: "AI Bot", text: botResponse(newMessage) }
        ]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div className={`chat-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="chat-header">
        <h1>💬 Live Chat</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message ${msg.user === "You" ? "sent" : "received"}`}>
            <span className="chat-user">{msg.user}</span>
            <p className="chat-text">{msg.text}</p>
          </div>
        ))}
        {isTyping && <p className="typing-indicator">AI Bot is typing...</p>}
        <div ref={chatEndRef}></div>
      </div>

      <div className="chat-input-box">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-btn" onClick={sendMessage}>📩</button>
      </div>
    </div>
  );
};

export default Chat;
