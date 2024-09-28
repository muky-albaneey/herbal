import React from 'react';
import TableCom from '../../component/table/Table';
import './cart.css';
import useCartStore from '../../utills/store/cart';
import { NavLink } from 'react-router-dom';

export default function CartComponent() {
  const totalPrice = useCartStore((state) => state.totalPrice()); // This will make it reactive to changes
  const cart = useCartStore((state) => state.cart); // In case you need to track cart items

  return (
    <div className='cartWrapper'>
      <h1>cart</h1>
      <div className="cartCon">
        <div className="cartLeft">
          <TableCom />
        </div>
        <div className="cartRight">
          <header className="cart_header">
          Total for Product
          </header>
          <section className="cart_items">
            <div className="pricing">
              <span>Sub Total</span>
              <h2>{totalPrice}</h2> 
            </div>

            <div className="pricing">
              <span>Delivery Fee</span>
              <h2></h2>
            </div>

            <div className="pricing">
              <span>Discount Fee</span>
              <h2></h2>
            </div>
            <hr />
            <div className="pricing">
              <span>Total Amount</span>
              <h2>{totalPrice}</h2> 
            </div>
          </section>
          <NavLink to='checkout' className="cart_foo">
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  ); 
}
