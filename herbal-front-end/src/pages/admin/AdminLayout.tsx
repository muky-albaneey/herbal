import React from 'react';
// import AdminNavBar from './AdminNavBar'; // Import the navigation component
import { Outlet } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin navigation at the top */}
      <AdminNavBar />

      {/* Main content area */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar could be added here if needed */}
        
        {/* Content area */}
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          
          {/* Dashboard Stats - Example */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-3xl">150</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Orders</h2>
              <p className="text-3xl">350</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Products</h2>
              <p className="text-3xl">50</p>
            </div>
          </div>

          {/* Outlet where child routes render */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
