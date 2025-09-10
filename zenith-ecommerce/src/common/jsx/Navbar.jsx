import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({});
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const activeLink = menuRef.current?.querySelector('.active-link');
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = menuRef.current.getBoundingClientRect();

      setHighlightStyle({
        width: `${rect.width}px`,
        transform: `translateX(${rect.left - parentRect.left}px)`
      });
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-section nav-links">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {/* Sliding highlight */}
            <span className="nav-highlight" style={highlightStyle}></span>

            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/bras" className={({ isActive }) => isActive ? "active-link" : ""}>
                Bras
              </NavLink>
            </li>
            <li>
              <NavLink to="/panties" className={({ isActive }) => isActive ? "active-link" : ""}>
                Panties
              </NavLink>
            </li>
            <li>
              <NavLink to="/sets" className={({ isActive }) => isActive ? "active-link" : ""}>
                Sets
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
