import React, { useState } from "react";
import "./About.css";

function About() {
  const [activeTab, setActiveTab] = useState("project");

  const tabContent = {
    project: (
      <p>
        Brew Buddy was concocted in a secret lab (okay, it was just a regular classroom) by Esosa and Will during a wild experiment at General Assembly. 
        Our mission: to create a brew-tiful way for hop enthusiasts and malt maniacs to discover the finest fermented fantasies across the land!
      </p>
    ),
    api: (
      <p>
        We've tapped into the keg of knowledge that is the <a href="https://www.openbrewerydb.org/" target="_blank" rel="noopener noreferrer">Open Brewery DB API</a>. 
        It's like having a psychic beer-tender who knows every brewery in existence. Spooky, right?
      </p>
    ),
    map: (
      <p>
        To help you navigate the foamy seas of beer locations, we've employed the cartographic sorcery of <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">Mapbox</a>. 
        It's so precise, you could use it to find your way back to your barstool after a long night of "research"!
      </p>
    )
  };

  return (
    <section className="section about-section">
      <div className="container">
        <h1 className="title is-2 has-text-centered mb-6">About Brew Buddy</h1>
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="tabs is-centered is-boxed">
              <ul>
                {Object.keys(tabContent).map((tab) => (
                  <li key={tab} className={activeTab === tab ? "is-active" : ""}>
                    <a onClick={() => setActiveTab(tab)}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="box content">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
        <div className="columns is-centered mt-6">
          <div className="column is-4 has-text-centered">
            <div className="box developer-box">
              <h3 className="title is-4">Esosa</h3>
              <p>Hops Whisperer & Pixel Alchemist</p>
              <p className="dev-description">Known for turning caffeine into code and occasionally mistaking keyboards for brewing equipment.</p>
              <a href="https://github.com/Esosa-web" target="_blank" rel="noopener noreferrer" className="button is-small is-link mt-2">
                GitHub (Beware of Brewing Commits)
              </a>
            </div>
          </div>
          <div className="column is-4 has-text-centered">
            <div className="box developer-box">
              <h3 className="title is-4">Will</h3>
              <p>Malt Maven & Syntax Sommelier</p>
              <p className="dev-description">Can debug code with one hand while pouring the perfect pint with the other. May or may not be part beer.</p>
              <a href="https://github.com/WS-Bit" target="_blank" rel="noopener noreferrer" className="button is-small is-link mt-2">
                GitHub (Contains Fermented Repositories)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;