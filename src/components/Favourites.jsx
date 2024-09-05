import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Favourites.css";


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function Favourites({ favourites, onRemoveFromFavourites }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (favourites.length > 0 && mapRef.current) {
      // Initialize the Mapbox map
      const map = new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.35, 39.5],
        zoom: 4,
      });

      map.addControl(new mapboxgl.NavigationControl());

      favourites.forEach((brewery) => {
        if (brewery.latitude && brewery.longitude) {
          const marker = new mapboxgl.Marker()
            .setLngLat([brewery.longitude, brewery.latitude])
            .addTo(map);

          const popup = new mapboxgl.Popup({
            offset: 25, 
            closeButton: false, 
            closeOnClick: false, 
          }).setText(brewery.name);

          marker.setPopup(popup);
          marker.getElement().addEventListener("mouseenter", () => popup.addTo(map));
          marker.getElement().addEventListener("mouseleave", () => popup.remove());
        }
      });

      return () => map.remove();
    }
  }, [favourites]);

  return (
    <div className="container mt-5">
      <h2 className="title is-3">Favourites</h2><br/>
      <h3 className="title is-5">Your favourites will appear below.</h3>
      <h3 className="title is-6">If your favourited brewery has geolocation logged, it will also appear on the map below!</h3>

      {/* Map container */}
      <div
        ref={mapRef}
        className="map-container"
        style={{ width: "100%", height: "500px", marginBottom: "20px" }}
      />

      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="favourites-wrapper">
          <div className="columns is-multiline">
            {favourites.map((brewery) => (
              <div
                className="column is-one-third-widescreen is-half-desktop is-full-tablet"
                key={brewery.id}
              >
                <div className="card favourite-card">
                  <div className="card-content">
                    <h3 className="title is-5">{brewery.name}</h3>
                    <p>
                      <strong>Brewery Type:</strong> {brewery.brewery_type}
                    </p>
                    <p>
                      <strong>City:</strong> {brewery.city}
                    </p>
                    <p>
                      <strong>Country:</strong> {brewery.country}
                    </p>
                    <p>
                      <strong>Phone Number:</strong> {brewery.phone}
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href={brewery.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {brewery.website_url}
                      </a>
                    </p>
                    <button
                      className="button is-danger mt-3"
                      onClick={() => onRemoveFromFavourites(brewery.id)}
                    >
                      Remove from Favourites
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favourites;
