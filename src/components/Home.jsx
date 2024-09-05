import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero is-primary is-bold is-fullheight-with-navbar animated-bg">
        <div
          className="hero-body"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container">
            {/* Rounded Opaque Text Box */}
            <div className="opaque-box">
              <h1 className="title is-1 fade-in">Welcome to Brew Buddy</h1>
              <h2 className="subtitle is-3 fade-in-delay">
                Your ultimate companion for discovering amazing breweries!
              </h2>
              <div className="buttons is-centered mt-6">
                <Link to="/search" className="button is-light is-large pulse-button">
                  Start Exploring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6 slide-in">Why Brew Buddy?</h2>
          <div className="columns is-multiline">
            <div className="column is-4 fade-in-up">
              <div className="box has-text-centered feature-box">
                <span className="icon is-large has-text-primary">
                  <i className="fas fa-search fa-3x"></i>
                </span>
                <h3 className="title is-4 mt-4">Easy Search</h3>
                <p>Find breweries by city, state, or country with just a few clicks.</p>
              </div>
            </div>
            <div className="column is-4 fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="box has-text-centered feature-box">
                <span className="icon is-large has-text-primary">
                  <i className="fas fa-heart fa-3x"></i>
                </span>
                <h3 className="title is-4 mt-4">Favorites</h3>
                <p>Save your favorite breweries for quick access anytime.</p>
              </div>
            </div>
            <div className="column is-4 fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="box has-text-centered feature-box">
                <span className="icon is-large has-text-primary">
                  <i className="fas fa-info-circle fa-3x"></i>
                </span>
                <h3 className="title is-4 mt-4">Detailed Info</h3>
                <p>Get comprehensive information about each brewery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section has-background-light cta-section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-8 slide-in-left">
              <h2 className="title is-3">Ready to find your new favorite brewery?</h2>
              <p className="subtitle is-5">Start your journey with Brew Buddy today!</p>
            </div>
            <div className="column is-4 slide-in-right">
              <Link to="/search" className="button is-primary is-large is-fullwidth hover-grow">
                Search Breweries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Brew Buddy</strong> by Esosa and Will. The source code is licensed under MIT.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;