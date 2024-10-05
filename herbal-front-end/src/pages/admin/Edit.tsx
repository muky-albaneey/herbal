// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useAuthStoreUser } from '../../utills/store/auth';
// import { decode } from 'jwt-js-decode';

// const ProductImageEdit = () => {


//   const jwtToken = useAuthStoreUser((state) => state.jwtToken);

//   const decodeToken = (token) => {
//       if (token) {
//           try {
//               let jwt = decode(token);
//               console.log('Decoded JWT:', jwt.payload);
//               return jwt.payload;
//           } catch (error) {
//               console.error('Failed to decode JWT:', error);
//               return null;
//           }
//       }
//       return null;
//   };

//   const decodedToken = decodeToken(jwtToken);
  
//  const [productData, setProductData] = useState({
//         name: '',
//         price: '',
//         quantity: '',
//         category: '',
//         description: '',
//         userId: '', // Assuming the user is already authenticated and you have the userId
//   });
//   const [file, setFile] = useState(null);
//   // const [productId, setProductId] = useState('');
//   // const [productName, setProductName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');


//   const [products, setProducts] = useState([]);
//   const [loadingFetch, setLoadingFetch] = useState(true); // Loading state
//   const [errorFetch, setErrorFetch] = useState(''); // Error state
//   const {id} = useParams()

//   console.log(id)


// React.useEffect(() => {
//   const fetchDashboardData = async () => {
//     try {
//       const productResponse = await axios.get(`https://backend-herbal.onrender.com/products/${id}`);
//       setProductData(productResponse.data); // Populate productData instead
//     } catch (err) {
//       setErrorFetch('Error fetching data.');
//       console.error(err);
//     } finally {
//       setLoadingFetch(false);
//     }
//   };

//   fetchDashboardData();
// }, [id]);

  
//   if (loadingFetch) {
//     return <div className="text-center mt-6">Loading dashboard data...</div>;
//   }

//   if (errorFetch) {
//     return <div className="text-center text-red-600 mt-6">{errorFetch}</div>;
//   }



// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({ ...prevData, [name]: value }));
// };

// const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
// };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!file || !productData.name || !productData.price || !productData.quantity || !productData.category || !productData.description || !productData.userId) {
//     setError('All fields are required including the image.');
//       return;
// }

// setLoading(true);
// setMessage('');

//     // Prepare form data
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', productData.name);
//     formData.append('price', productData.price);
//     formData.append('quantity', productData.quantity);
//     formData.append('category', productData.category);
//     formData.append('description', productData.description);
//     formData.append('userId', productData.userId);

//     try {
//       const response = await axios.patch(
//         `http://localhost:3000/products/${productId}`, // Replace with your NestJS backend URL
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       setMessage('File uploaded successfully!');
//     } catch (error) {
//       setMessage('Error uploading file.');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Product Image</h2>
//       <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//           <label className="block text-gray-700">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             value={productData.name}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Price</label>
//           <input
//             type="text"
//             name="price"
//             value={productData.price}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Quantity</label>
//           <input
//             type="text"
//             name="quantity"
//             value={productData.quantity}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>
        
        
//         <div className="mb-4">
//           <label className="block text-gray-700">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={productData.category}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={productData.description}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border-b-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">User ID</label>
//           <input
//             type="text"
//             name="userId"
//             value={decodedToken?.sub}
//             onChange={handleInputChange}
//             className="w-full border-b-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Product Image</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border rounded-lg"
//             accept=".jpg,.jpeg,.png,.gif"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Uploading...' : 'Upload Image'}
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ProductImageEdit;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';

const ProductImageEdit = () => {
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

  const [productData, setProductData] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    userId: decodedToken?.sub || '', // Initialize userId from decodedToken
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loadingFetch, setLoadingFetch] = useState(true); // Loading state
  const [errorFetch, setErrorFetch] = useState(''); // Error state
  const { id } = useParams();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const productResponse = await axios.get(`https://backend-herbal.onrender.com/products/${id}`);
        setProductData(productResponse.data); // Populate productData
      } catch (err) {
        setErrorFetch('Error fetching data.');
        console.error(err);
      } finally {
        setLoadingFetch(false);
      }
    };

    fetchDashboardData();
  }, [id]);

  // Handle loading and error states
  if (loadingFetch) {
    return <div className="text-center mt-6">Loading dashboard data...</div>;
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

    if (!file || !productData.name || !productData.price || !productData.quantity || !productData.category || !productData.description || !productData.userId) {
      setError('All fields are required including the image.');
      return;
    }

    setLoading(true);
    setMessage('');

    // Prepare form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);
    formData.append('category', productData.category);
    formData.append('description', productData.description);
    formData.append('userId', productData.userId);

    try {
      const response = await axios.patch(
        `http://localhost:3000/products/${id}`, // Use `id` instead of `productId`
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage('File uploaded successfully!');
    } catch (error) {
      setMessage('Error uploading file.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Product Image</h2>
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
            value={productData.userId} // Change to productData.userId
            onChange={handleInputChange}
            className="w-full border-b-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            readOnly // Optional: make it read-only if you want to prevent manual changes
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
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductImageEdit;
