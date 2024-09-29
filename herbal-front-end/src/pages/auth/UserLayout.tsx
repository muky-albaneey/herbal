import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Users() {
  const active = {
    backgroundColor: '#008103',
    color: '#fff',
    textDecoration: 'underline',
    fontWeight:'bold'
}

  return (
    <div>
        <section className="users_left">
        <NavLink style={({isActive}) => isActive ? active :  {color: '#FFFFFF'}} className='f_link' to='.' end >Fixtures</NavLink>
        <NavLink style={({isActive}) => isActive ? active : {color: '#FFFFFF'}} className='t_link' to='profile'>Table</NavLink>
        </section>
        <section className="user_right">

        <Outlet />
        </section>
    </div>
  );
}
