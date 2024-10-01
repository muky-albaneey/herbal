import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Your Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-green-50 transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700">Order ID: {order.id}</h2>
            <p className="text-gray-600 mt-2">Total Amount: ${order.totalAmount}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
