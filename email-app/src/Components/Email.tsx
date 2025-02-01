import React, { useState } from "react";
import "./Email.css";

const Email = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "John Doe",
      subject: "Meeting Reminder",
      body: "Don’t forget our meeting tomorrow at 10 AM.",
      read: false,
    },
    {
      id: 2,
      sender: "Jane Smith",
      subject: "Project Update",
      body: "The new feature has been implemented successfully!",
      read: false,
    },
  ]);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [newEmail, setNewEmail] = useState({ sender: "", subject: "", body: "" });
  const [showCompose, setShowCompose] = useState(false);

 
  const openEmail = (email) => {
    setSelectedEmail(email);
    setEmails(
      emails.map((e) => (e.id === email.id ? { ...e, read: true } : e))
    );
  };

  
  const closeEmail = () => setSelectedEmail(null);

  // Handle email sending
  const sendEmail = () => {
    if (newEmail.sender && newEmail.subject && newEmail.body) {
      setEmails([{ id: emails.length + 1, ...newEmail, read: false }, ...emails]);
      setNewEmail({ sender: "", subject: "", body: "" });
      setShowCompose(false);
    }
  };

  return (
    <div className="email-container">
      <h1 className="email-title">📨 Your Inbox</h1>

     
      <button className="compose-btn" onClick={() => setShowCompose(true)}>➕ Compose</button>

   
      <div className="email-list">
        {emails.map((email) => (
          <div key={email.id} className={`email-card ${email.read ? "read" : ""}`} onClick={() => openEmail(email)}>
            <h2 className="email-sender">{email.sender}</h2>
            <p className="email-subject">{email.subject}</p>
          </div>
        ))}
      </div>

      {/* Read Email View */}
      {selectedEmail && (
        <div className="email-popup">
          <div className="email-content">
            <h2>{selectedEmail.subject}</h2>
            <h3>From: {selectedEmail.sender}</h3>
            <p>{selectedEmail.body}</p>
            <button onClick={closeEmail}>❌ Close</button>
          </div>
        </div>
      )}

      {/* Compose Email Modal */}
      {showCompose && (
        <div className="compose-popup">
          <div className="compose-content">
            <h2>Compose Email</h2>
            <input
              type="text"
              placeholder="Sender Name"
              value={newEmail.sender}
              onChange={(e) => setNewEmail({ ...newEmail, sender: e.target.value })}
            />
            <input
              type="text"
              placeholder="Subject"
              value={newEmail.subject}
              onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
            />
            <textarea
              placeholder="Message"
              value={newEmail.body}
              onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}
            />
            <button onClick={sendEmail}>📩 Send</button>
            <button onClick={() => setShowCompose(false)}>❌ Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;
