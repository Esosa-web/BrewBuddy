import React, { useState } from 'react';

function Search({ onSearch, breweries, hasSearched, onAddToFavourites }) {
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [stateSearchTerm, setStateSearchTerm] = useState('');
  const [countrySearchTerm, setCountrySearchTerm] = useState('');

  const handleCitySearch = () => {
    if (!citySearchTerm.trim()) return;
    onSearch({ city: citySearchTerm.trim() });
    setCitySearchTerm('');
  };

  const handleStateSearch = () => {
    if (!stateSearchTerm.trim()) return;
    onSearch({ state: stateSearchTerm.trim() });
    setStateSearchTerm('');
  };

  const handleCountrySearch = () => {
    if (!countrySearchTerm.trim()) return;
    onSearch({ country: countrySearchTerm.trim() });
    setCountrySearchTerm('');
  };

  return (
    <div className="container mt-5">
      <div className="columns is-desktop">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-5">Search by City</h2>
                <input
                  className="input"
                  type="text"
                  value={citySearchTerm}
                  onChange={(e) => setCitySearchTerm(e.target.value)}
                  placeholder="Enter city"
                  onKeyUp={(e) => e.key === 'Enter' && handleCitySearch()}
                />
                <button className="button is-link mt-3" onClick={handleCitySearch}>Search City</button>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-5">Search by State</h2>
                <input
                  className="input"
                  type="text"
                  value={stateSearchTerm}
                  onChange={(e) => setStateSearchTerm(e.target.value)}
                  placeholder="Enter state"
                  onKeyUp={(e) => e.key === 'Enter' && handleStateSearch()}
                />
                <button className="button is-link mt-3" onClick={handleStateSearch}>Search State</button>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-5">Search by Country</h2>
                <input
                  className="input"
                  type="text"
                  value={countrySearchTerm}
                  onChange={(e) => setCountrySearchTerm(e.target.value)}
                  placeholder="Enter country"
                  onKeyUp={(e) => e.key === 'Enter' && handleCountrySearch()}
                />
                <button className="button is-link mt-3" onClick={handleCountrySearch}>Search Country</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {hasSearched && breweries.length === 0 && <p>No breweries found.</p>}
        {breweries.length > 0 && (
          <div className="columns is-multiline">
            {breweries.map((brewery) => (
              <div key={brewery.id} className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5">{brewery.name}</h3>
                    <p><strong>Brewery Type:</strong> {brewery.brewery_type}</p>
                    <p><strong>City:</strong> {brewery.city}</p>
                    <p><strong>Country:</strong> {brewery.country}</p>
                    <p><strong>Phone Number:</strong> {brewery.phone}</p>
                    <p><strong>Website:</strong> <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
                    <button className="button is-danger mt-2" onClick={() => onAddToFavourites(brewery)}>Save to Favourites</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;