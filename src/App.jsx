import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TokenPrice from './components/TokenPrice';
import './App.css';

function App() {
  const colors = ["#ff000055", "#00ff0099", "#0000ff55", "#ffff0099", "#ff00ff99"];
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd'
      );
      setPrice(response.data['the-open-network'].usd);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch price');
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="app">
      <header className="header">
        <h1>Accuracy TON Price Tracker 2</h1>
      </header>
      <main className="main">
        {colors.map((color) => (
          <TokenPrice bgColor={color} price={price} loading={loading} error={error} />
        ))}
      </main>
    </div>
  );
}

export default App;