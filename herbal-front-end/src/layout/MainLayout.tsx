// import React from 'react';
// // import Header from '../pages/header/Header';
// import { Outlet } from "react-router-dom"
// import Header from '../component/header/Header';
// import FooterComponent from '../component/footer/Footer';
// import Example from '../pages/admin_dashboard/header/AdminHeader';

// export default function Layout() {
//   return (
//     <div style={{ width:'100%', position:'relative', overflow:'visible' }}>
//          <Header />
//             <Outlet />
//         <FooterComponent />
//     </div>
//   );
// }
import React, { useState } from 'react';
import Header from '../component/header/Header';
import FooterComponent from '../component/footer/Footer';
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);  // Update search results state
  };

  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'visible' }}>
      <Header onSearch={handleSearch} />
      <Outlet context={{ searchResults }} /> {/* Pass search results to child components */}
      <FooterComponent />
    </div>
  );
}
