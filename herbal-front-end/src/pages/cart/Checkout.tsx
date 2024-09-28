import React from 'react';
import useCartStore from '../../utills/store/cart';
import './checkout.css';

export default function CheckoutName() {
    const cart = useCartStore((state) => state.cart)
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        state: '',
        city: '',
        streetName: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
  return (
    <div className='checkoutCon'>
         {/* <header className='checkoutHead'>
            <h1>Your Order</h1>
            <h1>Product Details</h1>
        </header> */}
        <section className="orderSec">
        {
            cart.map((items, index)=>(
                
            <div className="order_items">
                <img src={items.img.startsWith('https://') ? `${items.img}` : `https://${items.img}`} alt={`${items.name}`} />
                    <article className="order_info">
                        <div className="order_top">
                            <span>{items.name}</span>
                            <span style={{ fontWeight:'bold' }}>{items.price}</span>
                     </div>                
                <p>Supplements are usually taken daily, often as part of a health regimen.</p>
                </article>
            </div>
               
            ))
        }
        <section className="foo_checkout">
            <div className="top_foo_checkout"></div>
            <div className="foo_checkout_items"></div>
            <div className="foo_checkout_items"></div>
            <div className="foo_checkout_items"></div>
            <hr />
            <div className="foo_checkout_items"></div>
        </section>
         </section>
        <section className="productSec">
 
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
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
          name="emailAddress"
          placeholder="Enter your email address"
          value={formData.emailAddress}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          name="state"
          placeholder="Enter your state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Street Name</label>
        <input
          type="text"
          name="streetName"
          placeholder="Enter your street name"
          value={formData.streetName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>

        </section>
    </div>
  );
}
