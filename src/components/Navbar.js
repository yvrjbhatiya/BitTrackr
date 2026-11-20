import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Bit <span>Trackr</span>
        </Link>

        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/market" onClick={closeMenu}>
              Market
            </Link>
          </li>
        </ul>
        <div className={`menu-icon ${isOpen ? 'close' : ''}`} onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/market" onClick={closeMenu}>
              Market
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;