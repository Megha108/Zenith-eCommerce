import React from 'react';
import './SlidetextDescription.css';

const SliderTextDescription = () => {
  const handleShopNow = () => {
    // Add your shop now functionality here
    console.log('Shop Now button clicked');
    // You can add navigation or other actions
    alert('Redirecting to shop page...');
  };

  return (
    <div className="slider-text-content">
      <h2 className="text-title">Welcome to Zenith Lingeries</h2>
      <p className="text-description">
        Discover our exclusive collection of premium lingerie that combines comfort with elegance.
      </p>
      <button className="shop-now-btn" onClick={handleShopNow}>
        Shop Now
      </button>
    </div>
  );
};

export default SliderTextDescription;