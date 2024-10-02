import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './user.css'
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';


export default function Users() {

  const roleToken = useAuthStoreUser((state) => state.roleToken);

  const decodeToken = (token) => {
    if (token) {
      try {
        // const decoded = jwt.decode(token); // Decode the token
        let jwt = decode(token);
        console.log('Decoded role:', jwt.payload);
        return jwt.payload.role;
      } catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
      }
    }
    return null;
  };
  
  const decodedToken = decodeToken(roleToken);
    const navigate = useNavigate();
  const active = {
    // width:'14rem',
    backgroundColor: '#008103',
    color: '#fff',
    // textDecoration: 'underline',
    // fontWeight: 'bold',
    // padding: '.5rem',
  };
  
  return (
    <div className='users_wrapper'>
      <div className="users_header">
        <h5>Profile</h5>
        <p>Edit and enable your profile setting </p>
      </div>
      <div className="users_content">
      <section className="users_left">
        <div className="users_con">
          {/* NavLink for 'Fixtures' pointing to the index route */}
        <NavLink 
          style={({ isActive }) => (isActive ? active : { color: '#008103' })} 
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
        <NavLink 
          style={({ isActive }) => (isActive ? active : { color: '#008103' })} 
          className='user_link' 
          to='user_order'
        >
          View orders
        </NavLink>
        {decodedToken == 'admin' && (
              <NavLink 
              className='user_link' 
              to='/admin'
            >
              Admin dasboard
            </NavLink>
        )}
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
