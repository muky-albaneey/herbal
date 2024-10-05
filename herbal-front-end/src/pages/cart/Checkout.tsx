import React,{useState} from 'react';
import useCartStore from '../../utills/store/cart';
import './checkout.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';
import { TbCurrencyNaira } from 'react-icons/tb';

export default function CheckoutName() {
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const cart = useCartStore((state) => state.cart);
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
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        state: '',         // Correct field name
        country: 'Nigeria',
        streetName: '',    // Correct field name
        email: '',
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

        console.log('Form Data:', formData);
        console.log(decodedToken?.sub);

        try {
            setLoading(true); // Set loading state
            const response = await axios.post(
                `https://backend-herbal.onrender.com/user/${decodedToken?.sub}/address`, 
                formData,
                {
                    withCredentials: true, 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Address submitted successfully:', response.data);
            setSuccess(response.data.message);
            setError('');
            if(response.data && response.data.statusCode){
                navigate('/pay'); 
            }
            
        } catch (error) {
            console.error('Error submitting address:', error.response.data);
            console.error(error.response.data);
            setError(error.response.data);
            setSuccess('');
        }
    };

    const nigerianStates = [
        'Abuja','Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
        'Benue', 'Borno', 'Cross River','Delta', 'Ebonyi', 'Edo',
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
                                    <span style={{ fontWeight: 'bold' }}><TbCurrencyNaira />{items.price}</span>
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
                {error && <p className="text-red-600 mb-4">{error}</p>}
                {success && <p className="text-green-600 mb-4">{success}</p>}
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
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
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
                                name="state"  // Correct field name
                                value={formData.state}
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
                                name="state"  // Change to correct name
                                placeholder="Enter your state"
                                value={formData.state}
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
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Street Address</label>
                        <input
                            type="text"
                            name="streetName" // Correct field name
                            placeholder="Enter your street address"
                            value={formData.streetName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                     disabled={loading}
                    >
                        
                        {loading ? 'Submiting...' : 'Submit'}
                    </button>
                </form>
            </section>
        </div>
    );
}
