import React from 'react';
import useCartStore from '../../utills/store/cart';
import './checkout.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';


export default function CheckoutName() {
    const cart = useCartStore((state) => state.cart);

    const jwtToken = useAuthStoreUser((state) => state.jwtToken);
    const decodeToken = (token) => {
        if (token) {
          try {
            // const decoded = jwt.decode(token); // Decode the token
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

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        state: '',
        country: 'Nigeria',
        streetName: '',
        email:'',
        city: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.firstName || !formData.lastName || !formData.phoneNumber ||  !formData.streetName || !formData.email || !formData.city) {
          alert('Please fill out all fields');
          return;
      }

      console.log('Form Data:', formData);
      console.log(decodedToken?.sub)
      try {
        const response = await axios.post(
            'https://backend-herbal.onrender.com/user/63687312-b14e-400c-9afe-af49db794cc8/address', 
            formData,
            {
              withCredentials: true, 
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          
        console.log('Address submitted successfully:', response.data);
        // Handle success (e.g., show a success message)
      } catch (error) {
        console.error('Error submitting address:', error);
        // Handle error (e.g., show an error message)
      }
      navigate('/pay'); 
  };

    // List of all 36 states in Nigeria
    const nigerianStates = [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
        'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo',
        'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
        'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
        'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
        'Yobe', 'Zamfara'
    ];

    return (
        <div className='checkoutCon'>
            <section className="orderSec">
                <h1>Your Order</h1>
                {
                    cart.map((items, index) => (
                        <div className="order_items" key={index}>
                            <img src={items.img.startsWith('https://') ? `${items.img}` : `https://${items.img}`} alt={`${items.name}`} />
                            <article className="order_info">
                                <div className="order_top">
                                    <span>{items.name}</span>
                                    <span style={{ fontWeight: 'bold' }}>{items.price}</span>
                                </div>
                                <p>Supplements are usually taken daily, often as part of a health regimen.</p>
                            </article>
                        </div>
                    ))
                }
                <section className="foo_checkout">
                    <div className="top_foo_checkout">Total for Product</div>
                    <hr />
                </section>
            </section>
            <section className="productSec">
                <h1>Product Details</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md w-full">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="state"
                            placeholder="Enter your email address"
                            value={formData.state}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Kenya">Kenya</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        {formData.country === 'Nigeria' ? (
                            <select
                                name="streetName"
                                value={formData.streetName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            >
                                <option value="">Select a state</option>
                                {nigerianStates.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your state"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                   
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Add address
                    </button>
                </form>
            </section>
        </div>
    );
}
