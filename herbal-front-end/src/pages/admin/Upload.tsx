import React, { useState } from 'react';
import axios from 'axios';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';

const ProductUpload = () => {
  const jwtToken = useAuthStoreUser((state) => state.jwtToken);

  const decodeToken = (token) => {
      if (token) {
          try {
              let jwt = decode(token);
              console.log('Decoded JWT:', jwt.payload);
              return jwt.payload;
          } catch (error) {
              console.error('Failed to decode JWT:', error);
              return null;
          }
      }
      return null;
  };

  const decodedToken = decodeToken(jwtToken);
  const user_id = useAuthStoreUser((state) => state.user?.id);
  // Define state for form data
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    userId: user_id || decodedToken?.sub, // Assuming the user is already authenticated and you have the userId
  });

  const [file, setFile] = useState(null); // State for the file
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure that all fields are filled and a file is selected
    if (!file || !productData.name || !productData.price || !productData.quantity || !productData.category || !productData.description || !productData.userId) {
      setError('All fields are required including the image.');
      return;
    }


    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);
    formData.append('category', productData.category);
    formData.append('description', productData.description);
    formData.append('userId', productData.userId);

    try {
      setLoading(true); // Set loading state
      const response = await axios.post('https://backend-herbal.onrender.com/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setSuccess('Product uploaded successfully!');
      setError('');
      
      // Reset form after successful upload
      setProductData({
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: '',
        userId: decodedToken?.sub,
      });
      setFile(null);
    } catch (err) {
      console.error(err);
      setError('Error uploading product. Please try again.');
      setSuccess('');
    } finally {
      setLoading(false); // Unset loading state
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Upload New Product</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
        />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">User ID</label>
          <input
            type="text"
            name="userId"
            value={productData.userId}
            onChange={handleInputChange}
            className="w-full border-b-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg"
            accept=".jpg,.jpeg,.png,.gif"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Product'}
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default ProductUpload;
