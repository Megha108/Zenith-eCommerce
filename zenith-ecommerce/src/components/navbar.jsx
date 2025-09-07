import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Navigation Links - Center */}
        <div className="nav-section nav-links">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#bras">Bras</a></li>
            <li><a href="#panties">Panties</a></li>
            <li><a href="#sets">Sets</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;