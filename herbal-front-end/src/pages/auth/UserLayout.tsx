import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Users() {
  return (
    <div>
        <section className="users_left">

        </section>
        <section className="user_right">

        <Outlet />
        </section>
    </div>
  );
}
