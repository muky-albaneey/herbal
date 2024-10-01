import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetails = () => {
  const { id } = useParams(); // Accessing the order ID from the URL parameters
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`https://backend-herbal.onrender.com/orders/${id}`, {
          withCredentials: true,
        });
        setOrder(response.data); // Assuming the response structure contains the order details
      } catch (error) {
        setError('Failed to fetch order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Details</h1>
      {order && (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
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
      )}
    </div>
  );
};

export default OrderDetails;
