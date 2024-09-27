import React, { useState } from 'react';
import axios from 'axios';

const ProductUpload = () => {
  // Define state for form data
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    userId: '', // Assuming the user is already authenticated and you have the userId
  });

  const [file, setFile] = useState(null); // State for the file
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
        userId: '', // Reset the userId field as necessary
      });
      setFile(null);
    } catch (err) {
      console.error(err);
      setError('Error uploading product. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="product-upload">
      <h1>Upload New Product</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Product Name</label>
          <input 
            type="text" 
            name="name" 
            value={productData.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label>Price</label>
          <input 
            type="text" 
            name="price" 
            value={productData.price} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label>Quantity</label>
          <input 
            type="text" 
            name="quantity" 
            value={productData.quantity} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label>Category</label>
          <input 
            type="text" 
            name="category" 
            value={productData.category} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label>Description</label>
          <textarea 
            name="description" 
            value={productData.description} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label>User ID</label>
          <input 
            type="text" 
            name="userId" 
            value={productData.userId} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label>Product Image</label>
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept=".jpg,.jpeg,.png,.gif"
            required 
          />
        </div>
        
        <div>
          <button type="submit">Upload Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
