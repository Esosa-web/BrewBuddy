import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import About from './components/About';
import Favourites from './components/Favourites';

import './App.css';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });
    
   
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, [])
  
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  

  const fetchAllBreweries = async (url, allBreweries = [], page = 1) => {
    try {
      const response = await fetch(`${url}&page=${page}&per_page=50`);
      if (!response.ok) throw new Error('Failed to fetch breweries');

      const data = await response.json();
      allBreweries = [...allBreweries, ...data];

      if (data.length === 50) {
        return fetchAllBreweries(url, allBreweries, page + 1);
      } else {
        return allBreweries;
      }
    } catch (error) {
      console.error(error.message);
      return [];
    }
  };

  const addToFavourites = (brewery) => {
    if (!favourites.some(fav => fav.id === brewery.id)) {
      setFavourites([...favourites, brewery]);
    }
  };

  const removeFromFavourites = (breweryId) => {
    setFavourites(favourites.filter(brewery => brewery.id !== breweryId));
  };

  const fetchBreweries = async ({ city, state, country }) => {
    try {
      let url = 'https://api.openbrewerydb.org/v1/breweries?';

      if (city) {
        url += `by_city=${city}`;
      }
      if (state) {
        url += `&by_state=${state}`;
      }
      if (country) {
        url += `&by_country=${country}`;
      }

      const allBreweries = await fetchAllBreweries(url);
      setBreweries(allBreweries);
      setHasSearched(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/search" 
            element={
              <Search 
                onSearch={fetchBreweries} 
                breweries={breweries} 
                hasSearched={hasSearched} 
                onAddToFavourites={addToFavourites} 
              />
            } 
          />
          <Route 
            path="/favourites" 
            element={
              <Favourites 
                favourites={favourites} 
                onRemoveFromFavourites={removeFromFavourites} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
