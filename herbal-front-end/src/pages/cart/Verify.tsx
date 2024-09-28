import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const params = new URLSearchParams(location.search);
  const reference = params.get('reference'); // Get reference from the URL if included

  // useEffect(() => {
  //   const verifyPayment = async () => {
  //     try {
  //       const response = await axios.get(`https://backend-herbal.onrender.com/verify-payment?reference=${reference}`);
  //       setPaymentStatus(response.data);
  //     } catch (error) {
  //       console.error('Payment verification failed:', error);
  //     }
  //   };

  //   if (reference) {
  //     verifyPayment();
  //   }
  // }, [reference]);
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.get(`https://backend-herbal.onrender.com/verify-payment?reference=${reference}`);
        console.log('Payment verification response:', response.data); // Log response
        if (response.data.status === 'success') {
          setPaymentStatus(response.data.data);
        } else {
          setPaymentStatus(null); // Handle error
        }
      } catch (error) {
        console.error('Payment verification failed:', error);
        setPaymentStatus(null); // Set to null or handle error display
      }
    };
  
    if (reference) {
      verifyPayment();
    }
  }, [reference]);

  
  return (
    <div>
      <h1>Payment Successful!</h1>
      {paymentStatus ? (
        <p>Your payment has been confirmed. Reference: {paymentStatus.reference}</p>
      ) : (
        <p>Verifying your payment...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
