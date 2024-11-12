import React from 'react';
import TokenPrice from './components/TokenPrice';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>TON Price Tracker</h1>
      </header>
      <main className="main">
        <TokenPrice />
      </main>
    </div>
  );
}

export default App;