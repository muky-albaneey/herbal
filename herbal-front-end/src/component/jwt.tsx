import React from 'react';
import jwt from 'jsonwebtoken'; // Import the library
import { useAuthStoreUser } from '../utills/store/auth';

const YourComponent = () => {
  const jwtToken = useAuthStoreUser((state) => state.jwtToken);

  // Function to decode the JWT token
 const decodeToken = (token) => {
    if (token) {
      try {
        const decoded = jwt.decode(token); // Decode the token
        console.log('Decoded JWT:', decoded);
        return decoded;
      } catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
      }
    }
    return null;
  };

  const decodedToken = decodeToken(jwtToken);

  return (
    <div>
      <h1>Your Component</h1>
      {decodedToken ? (
        <pre>{JSON.stringify(decodedToken, null, 2)}</pre>
      ) : (
        <p>No valid JWT token to decode.</p>
      )}
    </div>
  );
};

export default YourComponent;
