import React from 'react';
import { useOutletContext } from 'react-router-dom';

function SearchResults() {
  const { searchResults } = useOutletContext();

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
