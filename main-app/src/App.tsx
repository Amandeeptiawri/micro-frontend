import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Chat from "chat/Chat";
import Email from "email/Email";
import { Sun, Moon, Mail, MessageCircle } from "lucide-react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        
        <nav className={`sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
          <div className="sidebar-header">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="toggle-sidebar">
              {sidebarOpen ? "❮" : "❯"}
            </button>
            <h2 className="logo">{sidebarOpen ? "📡 MicroApp" : "📡"}</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/email" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <Mail className="nav-icon" />
                {sidebarOpen && "Email"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <MessageCircle className="nav-icon" />
                {sidebarOpen && "ChatStream"}
              </NavLink>
            </li>
          </ul>
          <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

       
        <div className="main-content">
          <Routes>
            <Route path="/email" element={<Email />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
