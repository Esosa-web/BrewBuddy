import React, { useState } from 'react';

function Search({ onSearch }) {
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
    <div>
      <input
        type="text"
        value={citySearchTerm}
        onChange={(e) => setCitySearchTerm(e.target.value)}
        placeholder="Search by city"
        onKeyUp={(e) => e.key === 'Enter' && handleCitySearch()}
      />
      <button onClick={handleCitySearch}>Search City</button>

      <input
        type="text"
        value={stateSearchTerm}
        onChange={(e) => setStateSearchTerm(e.target.value)}
        placeholder="Search by state"
        onKeyUp={(e) => e.key === 'Enter' && handleStateSearch()}
      />
      <button onClick={handleStateSearch}>Search State</button>

      <input
        type="text"
        value={countrySearchTerm}
        onChange={(e) => setCountrySearchTerm(e.target.value)}
        placeholder="Search by country"
        onKeyUp={(e) => e.key === 'Enter' && handleCountrySearch()}
      />
      <button onClick={handleCountrySearch}>Search Country</button>
    </div>
  );
}

export default Search;







