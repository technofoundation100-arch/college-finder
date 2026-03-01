// components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>College<span>Finder</span></h1>
      </div>
      <div className={`nav-links ${isActive ? 'active' : ''}`}>
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/college">College Studies</Link>
        <Link to="/abroad">Abroad Studies</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;