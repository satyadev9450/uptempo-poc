import React from 'react';
import './App.css';
import Chat from './components/Chat';
import { AppProvider } from './components/AppProvider'; // Import as a named export

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>KOL InsightBot: AI-Driven Pharma Expertise</h1>
      </header>
      <main className="app-main">
        <AppProvider>
          <Chat />
        </AppProvider>
      </main>
    </div>
  );
}

export default App;
