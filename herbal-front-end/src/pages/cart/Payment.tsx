import React from 'react';
import useCartStore from '../../utills/store/cart';
import './checkout.css';

export default function PaymentName() {
    const cart = useCartStore((state) => state.cart)
    const [formData, setFormData] = React.useState({
        amount: '',
        currency: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
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
        <h1>Your Order</h1>
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
        <h1>Product Details</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
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
          >
            <option value="" disabled>Select a currency</option>
            <option value="USD">🇺🇸 USD - US Dollar</option>
            <option value="EUR">🇪🇺 EUR - Euro</option>
            <option value="GBP">🇬🇧 GBP - British Pound</option>
            <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
            <option value="NGN">🇳🇬 NGN - Nigerian Naira</option>
            <option value="INR">🇮🇳 INR - Indian Rupee</option>
            <option value="CAD">🇨🇦 CAD - Canadian Dollar</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Make Payment
      </button>
    </form>
        </section>
    </div>
  );
}
