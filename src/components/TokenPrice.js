import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TokenPrice.css';

function TokenPrice() {
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

  if (loading) return <div className="price-card loading">Loading...</div>;
  if (error) return <div className="price-card error">{error}</div>;

  return (
    <div className="price-card">
      <div className="price-label">Current TON Price</div>
      <div className="price-value">${price.toFixed(2)}</div>
    </div>
  );
}

export default TokenPrice;