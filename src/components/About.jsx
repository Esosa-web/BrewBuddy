import React from "react";

function About() {
  React.useEffect(() => {
    console.log("The About Page has mounted");
  }, []);

  return (
    <section className="section">
      <div className="hero is-info">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2">About Page</h1><br/>
            <p className="subtitle is-4">
              This brewery search website was made by Esosa and Will for a project with General Assembly.
              <br /><br/>
              We used the <a href="https://www.openbrewerydb.org/" target="_blank" rel="noopener noreferrer" className="has-text-link">Open Brewery DB API</a> to fetch the data for the breweries.<br/>
              We used <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="has-text-link">Mapbox</a> to display the map data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
