import React from 'react';
import { useGlobalContext } from './AppProvider';

const MessageInput = () => {
  const { messageText, setMessageText, handleSubmission, processing } = useGlobalContext();

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmission();
        }}
        placeholder="Type your message..."
        disabled={processing}
      />
      <button className="submit-button" onClick={handleSubmission} disabled={processing}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
