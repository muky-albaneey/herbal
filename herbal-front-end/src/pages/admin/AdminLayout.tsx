import React, {useState, useEffect} from 'react';
// import AdminNavBar from './AdminNavBar'; // Import the navigation component
import { Outlet, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import axios from 'axios';
import Dashboard from './AdminDashCom';

export default function AdminLayout() {
    const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  const navigate = useNavigate();

  // React.useEffect(() => {
//   if (!isAuthenticated) {
//     navigate('/auth/signup');
//   }
// }, [isAuthenticated, navigate]);
      // Fetch the counts for users, products, and orders
      
     
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [userResponse, orderResponse] = await Promise.all([
         
          axios.get('https://backend-herbal.onrender.com/user/count'),
          axios.get('https://backend-herbal.onrender.com/products/count'),
        ]);
        
        // setProducts(productResponse.data);
        // console.log(productResponse.data);

        setUsers(userResponse.data.totalUsers);
        console.log(userResponse.data);

        setOrders(orderResponse.data);
        console.log(orderResponse.data);

      } catch (err) {
        setError('Error fetching data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading dashboard data...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-6">{error}</div>;
  }
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
              <p className="text-3xl">{users}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Orders</h2>
              <p className="text-3xl">{orders}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Products</h2>
              <p className="text-3xl">{orders}</p>
            </div>
          </div>
            <Dashboard users={users} orders={orders} products={orders} />
          {/* Outlet where child routes render */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
