
import React, { useState } from 'react';
import Header from '../component/header/Header';
import FooterComponent from '../component/footer/Footer';
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsFoo, setSearchResultsFoo] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);  // Update search results state
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(`https://backend-herbal.onrender.com/products/category/${query}`);
      const data = await response.json();
      setSearchResultsFoo(data); // Set search results here
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Simulate search query
  const handleSearchFoo = (query) => {
    fetchSearchResults(query);
  };
  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'visible' }}>
      <Header onSearch={handleSearch} />
      <Outlet context={{ searchResults }} /> {/* Pass search results to child components */}
      <FooterComponent searchResults={searchResultsFoo} /> 
    </div>
  );
}
