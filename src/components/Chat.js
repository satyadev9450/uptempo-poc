import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import Spinner from './Spinner';

const Chat = () => {
  return (
    <div className="chat-container">
      <Messages />
      <MessageInput />
      <Spinner />
    </div>
  );
};

export default Chat;
