import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const params = new URLSearchParams(location.search);
  const reference = params.get('reference'); // Get reference from the URL if included

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.get(`https://backend-herbal.onrender.com/paystack/verify-payment?reference=${reference}`,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
            },
    }
        );
       
        if (response.data.status === 'success') {
          console.log('Payment verification response:', response.data); // Log response
          setPaymentStatus(response.data.data);
        } else {
          setPaymentStatus(null); // Handle error
        }
      } catch (error) {
        console.error('Payment verification failed:', error);
        setPaymentStatus(null); // Set to null or handle error display
        console.log(paymentStatus.data)
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
        <p>Your payment has been confirmed. Reference: {paymentStatus.data.reference}</p>
      ) : (
        <p>Verifying your payment...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
