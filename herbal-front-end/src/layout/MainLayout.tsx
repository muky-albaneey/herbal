import React from 'react';
// import Header from '../pages/header/Header';
import { Outlet } from "react-router-dom"
import Header from '../component/header/Header';
import FooterComponent from '../component/footer/Footer';

export default function Layout() {
  return (
    <div style={{ width:'100%', position:'relative', overflow:'visible' }}>
         <Header />
            <Outlet />
        <FooterComponent />
    </div>
  );
}
