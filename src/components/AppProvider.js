import React, { createContext, useContext, useRef, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const lastMsg = useRef();
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'ai',
      text: "Hi there! I'm your AI assistant, here to help with your questions. Ask me anything!",
    },
  ]);
  const [processing, setProcessing] = useState(false);

  const handleSubmission = async () => {
    if (!messageText.trim() || processing) return;

    const tempMessages = [
      ...messages,
      { from: 'human', text: messageText },
    ];

    setMessages(tempMessages);
    setMessageText('');

    setTimeout(() =>
      lastMsg.current.scrollIntoView({ behavior: 'smooth' })
    );

    try {
      setProcessing(true);
      const res = await fetch('http://localhost:5500', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: tempMessages.slice(-8) }),
      });
      setProcessing(false);

      const data = await res.json();
      const ans = data.data;

      setMessages((prev) => [
        ...prev,
        { from: 'ai', text: ans.trim() },
      ]);
    } catch (err) {
      const error = 'Error processing this message. Please try again later.';
      setMessages((prev) => [
        ...prev,
        { from: 'ai', text: error },
      ]);
    }

    setTimeout(() =>
      lastMsg.current.scrollIntoView({ behavior: 'smooth' })
    );
  };

  return (
    <AppContext.Provider
      value={{
        lastMsg,
        messageText,
        setMessageText,
        processing,
        setProcessing,
        messages,
        setMessages,
        handleSubmission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
