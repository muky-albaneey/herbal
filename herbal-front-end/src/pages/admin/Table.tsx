import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-herbal.onrender.com/products/all');
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products.');
        console.error(err);
      } finally {
        setLoading(false); // Remove loading once data is fetched
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-6">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Uploaded Products</h2>

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
              <th className="py-3 px-6">User</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-center">
                  <img
                    src={`https://${product.product_image.url}`}
                    alt={product.product_image.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6">{product.price}</td>
                <td className="py-3 px-6">{product.quantity}</td>
                <td className="py-3 px-6">{product.category}</td>
                <td className="py-3 px-6">{product.description}</td>
                <td className="py-3 px-6">{product.user.full_name}</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 ml-2 rounded-full hover:bg-red-600">
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

export default AdminProductTable;
