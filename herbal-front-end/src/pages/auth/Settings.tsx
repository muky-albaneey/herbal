import React, { useEffect, useState } from 'react';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';

const SettingsForm = () => {
  const userId = '63687312-b14e-400c-9afe-af49db794cc8'; // Replace with the actual user ID or pass it as a prop
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

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
  });
  const [error, setError] = useState(null);
  
  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://backend-herbal.onrender.com/user/${decodedToken?.sub}/single_user`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setFormData({
          fullName: userData.full_name,
          email: userData.email,
          phone: userData.phone_num,
          location: userData.location,
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData });

    try {
      const response = await fetch(`https://backend-herbal.onrender.com/user/update/${decodedToken?.sub}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          phone_num: formData.phone,
          location: formData.location,
          // role: "admin" // Include other fields as necessary
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const data = await response.json();
      console.log('Update response:', data);
      alert('User updated successfully!'); // Optionally handle success feedback
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update user data'); // Optionally handle error feedback
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-center text-2xl font-bold my-4">Edit Profile</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Full Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email-address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Phone Number"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Location"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-green-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SettingsForm;
