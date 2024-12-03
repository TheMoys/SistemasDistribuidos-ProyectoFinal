import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pokemon Team Manager</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/box">Box</Link>
      </div>
    </nav>
  );
}

export default Navbar;