import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Users() {
  const active = {
    width:'95%',
    backgroundColor: '#008103',
    color: '#fff',
    // textDecoration: 'underline',
    fontWeight: 'bold',
    padding: '.7rem'
  };

  return (
    <div className='users_wrapper'>
      <div className="users_header">
        <h5>Profile</h5>
        <p>Edit and enable your profile setting </p>
      </div>
      <div className="users_content">
      <section className="users_left">
        <div id="users_con">
          {/* NavLink for 'Fixtures' pointing to the index route */}
        <NavLink 
          style={({ isActive }) => (isActive ? active : { color: '#008103',width:'95%',padding: '.7rem',background: 'whitesmoke',fontWeight: 'bold' })} 
          className='user_link' 
          to='.' 
          end
        >
          Settings
        </NavLink>
        
        {/* NavLink for 'Table' pointing to 'profile' sub-route */}
        <NavLink 
          style={({ isActive }) => (isActive ? active : { color: '#008103' })} 
          className='user_link' 
          to='profile'
        >
          Change password
        </NavLink>
        </div>
      </section>

      <section className="user_right">
        {/* Display the content of the selected route here */}
        <Outlet />
      </section>
      </div>
    </div>
  );
}
