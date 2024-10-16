import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductImageEdit = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    userId: '', // Will be populated from the API response
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [errorFetch, setErrorFetch] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productResponse = await axios.get(`https://backend-herbal.onrender.com/products/${id}`);
        const product = productResponse.data;
        
        // Set the product data including userId from the API response
        setProductData({
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          category: product.category,
          description: product.description,
          userId: product.user.id, // Set userId directly from the API response
        });
      } catch (err) {
        setErrorFetch('Error fetching data.');
        console.error(err);
      } finally {
        setLoadingFetch(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loadingFetch) {
    return <div className="text-center mt-6"> 
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
</div></div>;
  }

  if (errorFetch) {
    return <div className="text-center text-red-600 mt-6">{errorFetch}</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!file || !productData.name || !productData.price || !productData.quantity || !productData.category || !productData.description) {
      setError('All fields are required, including the image.');
      return;
    }

    setLoading(true);
    setMessage('');
    setError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);
    formData.append('category', productData.category);
    formData.append('description', productData.description);
    formData.append('userId', productData.userId); // Set userId from the API response

    try {
      const response = await axios.patch(
        `https://backend-herbal.onrender.com/products/${id}`, // Ensure you're using the correct endpoint
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage('Product updated successfully!');
    } catch (error) {
      setMessage('Error uploading file.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Product Information</h2>
      <form onSubmit={handleSubmit}>
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
            readOnly // Set to read-only as it's populated from the API
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

        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Update Product'}
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default ProductImageEdit;
