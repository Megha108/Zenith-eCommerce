import React, { useState } from "react";
import './Header.css';
import logo from '../assets/logo1.png';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header id="site-header">
      {/* Search Box - Left */}
      <div className="header-search">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 
                0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 
                3.09-.59 4.23-1.57l.27.28v.79l5 
                4.99L20.49 19l-4.99-5z"/>
            </svg>
          </button>
        </form>
      </div>

      {/* Logo - Center */}
      <div className="header-center">
        <img 
          src={logo} 
          alt="Zenith Lingeries Logo" 
          className="logo" 
        />
      </div>

      {/* Right side actions */}
      <div className="header-actions">
        {/* Search icon (mobile only) */}
        <button 
          className="search-icon-only" 
          onClick={() => alert("Open search modal!")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 
              6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 
              0 3.09-.59 4.23-1.57l.27.28v.79l5 
              4.99L20.49 19l-4.99-5z"/>
          </svg>
        </button>

        {/* Wishlist Button */}
        <button className="nav-icon-button wishlist-btn" aria-label="Wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 
              2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 
              2 5.42 2 8.5c0 3.78 3.4 6.86 
              8.55 11.54L12 21.35l1.45-1.32C18.6 
              15.36 22 12.28 22 8.5 22 5.42 19.58 
              3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 
              14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 
              5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 
              5.99 14.96 5 16.5 5c2 0 3.5 1.5 
              3.5 3.5 0 2.89-3.14 5.74-7.9 
              10.05z"/>
          </svg>
          <span className="icon-badge">0</span>
        </button>

        {/* Cart Button */}
        <button className="nav-icon-button cart-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 
              2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 
              2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 
              0 1.1.9 2 2 2h12v-2H7.42c-.14 
              0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 
              0 1.41-.41 1.75-1.03l3.58-6.49A1.003 
              1.003 0 0020 4H5.21l-.94-2H1zm16 
              16c-1.1 0-1.99.9-1.99 
              2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span className="icon-badge">0</span>
        </button>

        
        {/* Profile Button */}
        <button className="nav-icon-button profile-btn" aria-label="User Profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M12 12c2.21 0 4-1.79 
              4-4s-1.79-4-4-4-4 1.79-4 4 
              1.79 4 4 4zm0 2c-2.67 0-8 
              1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
        {/* Login Button */}
        <button className="login-button">Login</button>

      </div>
    </header>
  );
}

export default Header;
