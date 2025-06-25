import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">WaterPark</Link></div>
      <ul className="nav-links">
        <li><Link to="/theme">Theme Park</Link></li>
        <li><Link to="/water">Water Park</Link></li>
        <li><Link to="/tickets">Tickets & Offers</Link></li>
        <li><Link to="/snow">Snow World</Link></li>
        <li><Link to="/quick">Quick Links</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;