import React from "react";

function Favourites({ favourites, onRemoveFromFavourites }) {
  React.useEffect(() => {
    console.log("The Favourites Page has mounted");
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="title is-4">Favourites</h2>

      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="columns is-multiline">
          {favourites.map((brewery) => (
            <div className="column is-one-third" key={brewery.id}>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h3 className="title is-5">{brewery.name}</h3>
                    <p><strong>Brewery Type:</strong> {brewery.brewery_type}</p>
                    <p><strong>City:</strong> {brewery.city}</p>
                    <p><strong>Country:</strong> {brewery.country}</p>
                    <p><strong>Phone Number:</strong> {brewery.phone}</p>
                    <p><strong>Website:</strong> <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
                    <button
                      className="button is-danger mt-3"
                      onClick={() => onRemoveFromFavourites(brewery.id)}
                    >
                      Remove from Favourites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
