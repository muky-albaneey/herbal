import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCartStore from '../../utills/store/cart';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';

const PaymentSuccess = () => {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [orderData, setOrderData] = useState(null); // Store the order data
  const [orderError, setOrderError] = useState(null); // To handle any order creation errors

  const totalPrice = useCartStore((state) => state.totalPrice()); // Reactive total price
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const jwtToken = useAuthStoreUser((state) => state.jwtToken);
const navigate = useNavigate()

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
  const params = new URLSearchParams(location.search);
  const reference = params.get('reference'); // Get reference from the URL if included

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) return; // Exit early if no reference

      try {
        const response = await axios.get(
          `https://backend-herbal.onrender.com/paystack/verify-payment?reference=${reference}`,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
            },
          }
        );

        if (response.data.status === 'success') {
          console.log('Payment verification response:', response.data);
          setPaymentStatus(response.data.data);

          // Only create the order if payment verification was successful
          await createOrder();
        } else {
          setPaymentStatus(null); // Handle failed payment verification
        }
      } catch (error) {
        console.error('Payment verification failed:', error);
        setPaymentStatus(null);
      }
    };

    const createOrder = async () => {
       // Check if the cart is empty
       if (cart.length === 0) {
        setOrderError('Your cart is empty. Cannot create an order.');
        return; // Exit early if the cart is empty
      }

      try {
        const orderResponse = await axios.post(
          `https://backend-herbal.onrender.com/orders/${decodedToken?.sub}`,
          { items: cart }, // Wrapping cart data correctly
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Order response:', orderResponse.data);
        setOrderData(orderResponse.data.data); // Set returned order data

        if (orderResponse.status === 200) {
          clearCart(); // Clear cart after order is created
        }
      } catch (orderError) {
        console.error('Order creation failed:', orderError);
        setOrderError('Failed to create order. Please try again.');
      }
    };

    verifyPayment();
  }, [reference, cart, clearCart]);

    // useEffect for redirection after 1 minute
    useEffect(() => {
      if (paymentStatus) {
        const timer = setTimeout(() => {
          navigate('/products'); // Replace '/some-other-page' with the desired route
        }, 60000); // 1 minute = 60000 ms
  
        return () => clearTimeout(timer); // Cleanup timeout if component unmounts
      }
    }, [paymentStatus, navigate]);
  
  return (
    <div>
      <h1>Payment Successful!</h1>
      {paymentStatus ? (
        <>
          <p>Your payment has been confirmed. Reference: {paymentStatus.reference}</p>
          {orderError ? (
            <p style={{ color: 'red' }}>{orderError}</p>
          ) : orderData ? (
            <p>Order created successfully!</p>
          ) : (
            <p>Creating your order...</p>
          )}
        </>
      ) : (
        <p>Verifying your payment...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
