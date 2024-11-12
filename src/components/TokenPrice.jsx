import React from 'react';
import './TokenPrice.css';

function TokenPrice({ bgColor, price, loading, error }) {


  if (loading) return <div className="price-card loading" style={{ backgroundColor: bgColor }}>Loading...</div>;
  if (error) return <div className="price-card error" style={{ backgroundColor: bgColor }}>{error}</div>;

  return (
    <div className="price-card" style={{ backgroundColor: bgColor }}>
      <div className="price-label">Super Current TON Price</div>
      <div className="price-value">${price.toFixed(2)}</div>
    </div>
  );
}

export default TokenPrice;