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
                        <img src={``} alt="" />
                        <article className="order_info">
                                <div className="order_top">
                                    <span>{items.name}</span>
                                    <span>{items.price}</span>
                                </div>                
                                <p>Supplements are usually taken daily, often as part of a health regimen.</p>
                        </article>
                    </div>
               
            ))
        }
         </section>
        <section className="productSec"></section>
    </div>
  );
}
