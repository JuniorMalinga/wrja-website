import { useState } from "react";
import seedContactMessages from "../data/contactMessages";

export default function AdminContactsPanel() {
  const [messages, setMessages] = useState(() => seedContactMessages.map((message) => ({ ...message })));

  const handleDelete = (id) => {
    if (window.confirm("Delete this message?")) {
      setMessages((current) => current.filter((message) => message.id !== id));
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Contact Messages</h2>
      </div>

      <div className="admin-messages-list">
        {messages.length === 0 && <p>No messages.</p>}

        {messages.map((message) => (
          <div key={message.id} className="admin-message-card">
            <div className="admin-message-header">
              <div>
                <p className="admin-message-name">{message.name}</p>
                <p className="admin-message-email">{message.email}</p>
              </div>
              <span className="admin-message-date">{message.date}</span>
            </div>
            <p className="admin-message-body">{message.message}</p>
            <button onClick={() => handleDelete(message.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}