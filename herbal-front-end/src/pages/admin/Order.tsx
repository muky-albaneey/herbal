import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import { TbCurrencyNaira } from 'react-icons/tb';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://backend-herbal.onrender.com/orders', {
          withCredentials: true,
        });
        setOrders(response.data); // Adjust this based on your response structure
      } catch (error) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return (
    <>
       <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
    </>
  );
  if (error) return <p className="text-red-500">{error}</p>;

  // Function to handle order deletion
  const handleDeleteOrder = async (orderId) => {
    try {
      // Send DELETE request to remove the order
      await axios.delete(`https://backend-herbal.onrender.com/orders/${orderId}`, {
        withCredentials: true, // Ensure the request includes credentials if necessary
      });

      // Update the orders state to remove the deleted order from the UI
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    } catch (err) {
      setError('Error deleting order.');
      console.error(err);
    }
  };

   // Function to handle deleting all orders
   const handleDeleteAllOrders = async () => {
    if (window.confirm('Are you sure you want to delete all orders?')) {
      try {
        // Send DELETE request to remove all orders
        await axios.delete(`https://backend-herbal.onrender.com/orders`, {
          withCredentials: true,
        });

        // Clear the orders state
        setOrders([]);
      } catch (err) {
        setError('Error deleting all orders.');
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Your Orders</h1>
      <button
        onClick={handleDeleteAllOrders}
        className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
      >
        Delete All Orders
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-green-50 transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700">
              <Link to={`/admin/${order.id}/order`}>Order details: {order.id}</Link> {/* Link to order details page */}
            </h2>
            <p className="text-gray-600 mt-2">Total Amount: <TbCurrencyNaira />{order.totalAmount}</p>
            <p className="text-gray-600 mt-2">Created At: {new Date(order.createdAt).toLocaleDateString()}</p>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Items:</h3>
              <ul className="list-disc list-inside">
                {order.items.map((item) => (
                  <li key={item.id} className="text-gray-600">{item.name} (x{item.quantity}) - ${item.price}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Delivery Address:</h3>
              <p className="text-gray-600">{order.user?.address?.street}, {order.user?.address?.city}, {order.user?.address?.state}</p>
            </div>

            {/* Delete button */}
            <button
              onClick={() => handleDeleteOrder(order.id)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Delete Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
