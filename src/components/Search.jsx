import React, { useState, useEffect } from 'react';

function Search({ onSearch, breweries, hasSearched, onAddToFavourites }) {
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [stateSearchTerm, setStateSearchTerm] = useState('');
  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [breweriesPerPage] = useState(9); 

  useEffect(() => {
    setCurrentPage(1); 
  }, [breweries]);

  const handleCitySearch = async () => {
    if (!citySearchTerm.trim()) return;
    setLoading(true); // Start loading
    await onSearch({ city: citySearchTerm.trim() });
    setCitySearchTerm('');
    setLoading(false); // Stop loading
  };

  const handleStateSearch = async () => {
    if (!stateSearchTerm.trim()) return;
    setLoading(true); // Start loading
    await onSearch({ state: stateSearchTerm.trim() });
    setStateSearchTerm('');
    setLoading(false); // Stop loading
  };

  const handleCountrySearch = async () => {
    if (!countrySearchTerm.trim()) return;
    setLoading(true); // Start loading
    await onSearch({ country: countrySearchTerm.trim() });
    setCountrySearchTerm('');
    setLoading(false); // Stop loading
  };

  
  const totalPages = Math.ceil(breweries.length / breweriesPerPage);

  
  const currentBreweries = breweries.slice(
    (currentPage - 1) * breweriesPerPage,
    currentPage * breweriesPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
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
                <button 
                  className={`button is-link mt-3 ${loading ? 'is-loading' : ''}`} 
                  onClick={handleCitySearch}
                  disabled={loading} // Disable button when loading
                >
                  Search City
                </button>
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
                <button 
                  className={`button is-link mt-3 ${loading ? 'is-loading' : ''}`} 
                  onClick={handleStateSearch}
                  disabled={loading} // Disable button when loading
                >
                  Search State
                </button>
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
                <button 
                  className={`button is-link mt-3 ${loading ? 'is-loading' : ''}`} 
                  onClick={handleCountrySearch}
                  disabled={loading} // Disable button when loading
                >
                  Search Country
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {hasSearched && breweries.length === 0 && <p>No breweries found.</p>}
        {currentBreweries.length > 0 && (
          <div>
            <div className="columns is-multiline">
              {currentBreweries.map((brewery) => (
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
            <nav className="pagination is-centered mt-5">
              <button
                className="button is-link"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <button
                className="button is-link"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
              <p className="ml-2">Page {currentPage} of {totalPages}</p>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
