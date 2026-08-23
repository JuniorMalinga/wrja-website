import { useEffect, useRef, useState } from "react";

const quickReplies = [
  "What programs do you offer?",
  "How do I book a session?",
  "Where are you located?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hi! I'm the WRJA assistant. Ask me about programs, booking, or where to find us.",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();

    if (!trimmed || isTyping) return;

    const userMessage = {
      id: Date.now(),
      from: "user",
      text: trimmed,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmed,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      const botMessage = {
        id: Date.now() + 1,
        from: "bot",
        text: data.answer,
      };

      setMessages((current) => [
        ...current,
        botMessage,
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      const errorMessage = {
        id: Date.now() + 1,
        from: "bot",
        text: "Sorry, I'm having trouble connecting right now. Please try again or use the WRJA Contact page.",
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-panel">

          <div className="chat-panel-header">
            <div>
              <p className="chat-panel-title">
                WRJA Assistant
              </p>

              <p className="chat-panel-subtitle">
                Welcome the newest Ai chatbot!!
              </p>
            </div>

            <button
              className="chat-panel-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          <div className="chat-panel-messages">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-bubble chat-bubble-${message.from}`}
              >
                {message.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble chat-bubble-bot chat-typing">
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {messages.length === 1 && (
            <div className="chat-quick-replies">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <form
            className="chat-panel-input"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(event) =>
                setInputValue(event.target.value)
              }
              disabled={isTyping}
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={isTyping || !inputValue.trim()}
            >
              &#10148;
            </button>
          </form>

        </div>
      )}

      <button
        className={`chat-toggle ${
          isOpen ? "chat-toggle-open" : ""
        }`}
        onClick={() =>
          setIsOpen((open) => !open)
        }
        aria-label={
          isOpen ? "Close chat" : "Open chat"
        }
      >
        {isOpen ? "\u00d7" : "\ud83e\udd4b"}

        {!isOpen && (
          <span className="chat-toggle-pulse" />
        )}
      </button>
    </div>
  );
}