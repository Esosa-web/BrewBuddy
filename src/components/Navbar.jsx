import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-3">Brew Buddy 🍺</h1>
        </Link>

        <a
          role="button" 
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isActive ? 'true' : 'false'}
          data-target="navbarBasic"
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/search" className="navbar-item">
            Search
          </Link>

          <Link to="/favourites" className="navbar-item">
            Favourites
          </Link>

          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;