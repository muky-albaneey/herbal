import React from 'react';
import { useOutletContext } from 'react-router-dom';

function SearchResults() {
  const { searchResults } = useOutletContext();

  return (
    <div>
    
      {searchResults.length === 0 ?'' : (
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
