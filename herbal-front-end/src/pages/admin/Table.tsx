import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TbCurrencyNaira } from 'react-icons/tb';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

    // Fetch the counts for users, products, and orders
    useEffect(() => {
      const fetchDashboardData = async () => {
        try {
          const [productResponse, userResponse, orderResponse] = await Promise.all([
            axios.get('https://backend-herbal.onrender.com/products/all'),
            axios.get('https://backend-herbal.onrender.com/user/count'),
            axios.get('https://backend-herbal.onrender.com/products/count'),
          ]);
          
          setProducts(productResponse.data);
          // console.log(productResponse.data);

          setUsers(userResponse.data.totalUsers);
          // console.log(userResponse.data);

          setOrders(orderResponse.data);
          // console.log(orderResponse.data);

        } catch (err) {
          setError('Error fetching data.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchDashboardData();
    }, []);

    // Handle product deletion
    const handleDeleteProduct = async (productId) => {
      try {
        // Send DELETE request to remove the product
        await axios.delete(`https://backend-herbal.onrender.com/products/${productId}`);
        
        // Update the state to remove the deleted product from the UI
        setProducts(products.filter(product => product.id !== productId));
      } catch (err) {
        setError('Error deleting product.');
        console.error(err);
      }
    };
    if (loading) {
      return <div className="text-center mt-6"> <div className="spinner-grow text-primary" role="status">
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
  </div></div>;
    }

    if (error) {
      return <div className="text-center text-red-600 mt-6">{error}</div>;
    }

  return (
    <div className="container mx-auto p-6">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2> */}

      {/* Dashboard buttons for total counts */}
      {/* <div className="flex justify-between mb-8">
        <div className="bg-blue-500 text-white rounded-lg p-6 shadow-md text-center">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold mt-2">{users}</p>
        </div>
        <div className="bg-green-500 text-white rounded-lg p-6 shadow-md text-center">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-2xl font-bold mt-2">{orders}</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-md text-center">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold mt-2">{orders}</p>
        </div>
      </div> */}

      {/* Product table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-center">
                  {
                    product.product_image.url.startsWith('https://') ? 

                   ( <img
                    src={`${product.product_image.url}`}
                    alt={product.product_image.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />):
                  (
                    <img
                    src={`https://${product.product_image.url}`}
                    alt={product.product_image.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  )
                  }
                  {/* <img
                    src={?  :`https://${product.product_image.url}`}
                    alt={product.product_image.name}
                    className="h-16 w-16 rounded-full object-cover"
                  /> */}
                </td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6"><TbCurrencyNaira />{product.price}</td>
                <td className="py-3 px-6">{product.quantity}</td>
                <td className="py-3 px-6">{product.category}</td>
                <td className="py-3 px-6">{product.description}</td>
                <td className="py-3 px-6">{new Date(product.createdAt).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-center">
                  <Link to={`${product.id}/edit`} className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600">
                    Edit
                  </Link>
                  <button 
                   onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-3 py-1 ml-2 rounded-full hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
