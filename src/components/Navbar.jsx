import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-4">Brew Buddy</h1>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
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
