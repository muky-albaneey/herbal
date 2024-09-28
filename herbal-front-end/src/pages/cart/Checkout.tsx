import React from 'react';
import useCartStore from '../../utills/store/cart';
import './checkout.css';

export default function CheckoutName() {
    const cart = useCartStore((state) => state.cart)

  return (
    <div className='checkoutCon'>
        <header>
            <h1>Your Order</h1>
            <h1>Product Details</h1>
        </header>
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
        <section className="productSec"></section>
    </div>
  );
}
