// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

// export default function Users() {
//   const active = {
//     backgroundColor: '#008103',
//     color: '#fff',
//     textDecoration: 'underline',
//     fontWeight:'bold'
// }

//   return (
//     <div>
//         <section className="users_left">
//         <NavLink style={({isActive}) => isActive ? active :  {color: '#FFFFFF'}} className='f_link' to='.' end >Fixtures</NavLink>
//         <NavLink style={({isActive}) => isActive ? active : {color: '#FFFFFF'}} className='t_link' to='profile'>Table</NavLink>
//         </section>
//         <section className="user_right">

//         <Outlet />
//         </section>
//     </div>
//   );
// }
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Users() {
  const active = {
    // width:'10rem',
    backgroundColor: '#008103',
    color: '#fff',
    textDecoration: 'underline',
    fontWeight: 'bold',
    padding: '1.5rem',
  };

  return (
    <div>
      <div className="users_header">
        <h5>Profile</h5>
        <p>Edit and enable your profile setting </p>
      </div>
      <section className="users_left">
        {/* NavLink for 'Fixtures' pointing to the index route */}
        <NavLink 
          style={({ isActive }) => (isActive ? active : { color: '#008103' })} 
          className='f_link' 
          to='.' 
          end
        >
          Settings
        </NavLink>
        
        {/* NavLink for 'Table' pointing to 'profile' sub-route */}
        <NavLink 
          style={({ isActive }) => (isActive ? active : { color: '#008103' })} 
          className='t_link' 
          to='profile'
        >
          Change password
        </NavLink>
      </section>

      <section className="user_right">
        {/* Display the content of the selected route here */}
        <Outlet />
      </section>
    </div>
  );
}
