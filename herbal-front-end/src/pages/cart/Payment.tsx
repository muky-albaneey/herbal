// import React from 'react';
// import useCartStore from '../../utills/store/cart';
// import './checkout.css';

// export default function PaymentName() {
//     const cart = useCartStore((state) => state.cart)
//     const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//     const [formData, setFormData] = React.useState({
//         amount: totalPrice,
//         currency: '',
//       });
    
//       const handleChange = (e) => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value,
//         });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
//       };
    
//   return (
//     <div className='checkoutCon'>
      
//         <section className="orderSec">
//         <h1>Your Order</h1>
//         {
//             cart.map((items, index)=>(
                
//             <div className="order_items">
//                 <img src={items.img.startsWith('https://') ? `${items.img}` : `https://${items.img}`} alt={`${items.name}`} />
//                     <article className="order_info">
//                         <div className="order_top">
//                             <span>{items.name}</span>
//                             <span style={{ fontWeight:'bold' }}>{items.price}</span>
//                      </div>                
//                 <p>Supplements are usually taken daily, often as part of a health regimen.</p>
//                 </article>
//             </div>
               
//             ))
//         }
//         <section className="foo_checkout">
//             <div className="top_foo_checkout"></div>
//             <div className="foo_checkout_items"></div>
//             <div className="foo_checkout_items"></div>
//             <div className="foo_checkout_items"></div>
//             <hr />
//             <div className="foo_checkout_items"></div>
//         </section>
//          </section>
//         <section className="productSec">
//         <h1>Product Details</h1>
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Amount</label>
//         <input
//           type="number"
//           name="amount"
//           placeholder="Enter amount"
//           value={formData.amount}
//           onChange={handleChange}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//           readOnly
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Currency</label>
//         <div className="relative">
//           <select
//             name="currency"
//             value={formData.currency}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="" disabled>Select a currency</option>
//             <option value="USD">🇺🇸 USD - US Dollar</option>
//             <option value="GHS">🇬🇭 GHS - Ghanaian Cedi</option>
//             <option value="NGN">🇳🇬 NGN - Nigerian Naira</option>
//             <option value="KES">🇰🇪 KES - Kenyan Shilling</option>
//           </select>
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//       >
//         Make Payment
//       </button>
//     </form>
//         </section>
//     </div>
//   );
// }
import React, { useState } from 'react';
import useCartStore from '../../utills/store/cart';
import axios from 'axios'; // Import Axios for HTTP requests
import './checkout.css';

export default function PaymentName() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    amount: totalPrice,
    currency: '',
    email: '', // Add an email field for payment initialization
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace with your actual backend URL
      const response = await axios.post('https://backend-herbal.onrender.com/paystack/initialize', {
        email: formData.email,
        amount: formData.amount,
        currency: formData.currency,
      },{
        withCredentials: true,
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (response.data.status === 'success') {
        setSuccess('Payment initialized successfully!');
        // Handle payment redirection or next steps based on Paystack response
      } else {
        setError('Error initializing payment.');
      }
    } catch (err) {
      setError('Failed to initialize payment. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='checkoutCon'>
      <section className="orderSec">
        <h1>Your Order</h1>
        {cart.map((items, index) => (
          <div className="order_items" key={index}>
            <img
              src={items.img.startsWith('https://') ? `${items.img}` : `https://${items.img}`}
              alt={`${items.name}`}
            />
            <article className="order_info">
              <div className="order_top">
                <span>{items.name}</span>
                <span style={{ fontWeight: 'bold' }}>{items.price}</span>
              </div>
              <p>Supplements are usually taken daily, often as part of a health regimen.</p>
            </article>
          </div>
        ))}
        <section className="foo_checkout">
          <div className="top_foo_checkout"></div>
          <hr />
        </section>
      </section>

      <section className="productSec">
        <h1>Product Details</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Currency</label>
            <div className="relative">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="" disabled>Select a currency</option>
                <option value="USD">🇺🇸 USD - US Dollar</option>
                <option value="GHS">🇬🇭 GHS - Ghanaian Cedi</option>
                <option value="NGN">🇳🇬 NGN - Nigerian Naira</option>
                <option value="KES">🇰🇪 KES - Kenyan Shilling</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {loading ? 'Processing...' : 'Make Payment'}
          </button>
        </form>
      </section>
    </div>
  );
}
