import React from 'react';
import { useGlobalContext } from './AppProvider';
import aiIcon from '../assets/ai-icon.png';
import humanIcon from '../assets/human-icon.png';

const Messages = () => {
  const { messages, lastMsg } = useGlobalContext();

  return (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          ref={index === messages.length - 1 ? lastMsg : null}
          className={`message ${msg.from}`}
        >
          <img
            src={msg.from === 'ai' ? aiIcon : humanIcon}
            alt={`${msg.from} icon`}
            className="message-icon"
          />
          <span className="message-text">{msg.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
