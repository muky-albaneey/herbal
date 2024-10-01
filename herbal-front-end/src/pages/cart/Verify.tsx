// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import useCartStore from '../../utills/store/cart';

// const PaymentSuccess = () => {
//   const location = useLocation();
//   const [paymentStatus, setPaymentStatus] = useState(null);

//   const totalPrice = useCartStore((state) => state.totalPrice()); // This will make it reactive to changes
//   const cart = useCartStore((state) => state.cart);
//   const clearCart = useCartStore((state) => state.clearCart); // Get the clearCart method
// console.log(2000000,cart)
//   const [cartData, setcartData] = useState([]);

//   const params = new URLSearchParams(location.search);
//   const reference = params.get('reference'); // Get reference from the URL if included

//   useEffect(() => {
//     const verifyPayment = async () => {
//       try {
//         const response = await axios.get(`https://backend-herbal.onrender.com/paystack/verify-payment?reference=${reference}`, {
//           withCredentials: true,
//           headers: {
//             'Cache-Control': 'no-cache',
//           },
//         });

//         if (response.data.status === 'success') {
//           console.log('Payment verification response:', response.data); // Log response
//           setPaymentStatus(response.data.data);
          

//           const order = await axios.post(
//             'https://backend-herbal.onrender.com/orders/63687312-b14e-400c-9afe-af49db794cc8', 
//             cart,
//             {
//               withCredentials: true,
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           );
//           console.log('Order response:', order.data);
//           setcartData(order.data);
//           console.log(100000,cartData)
//           if (order.status === 200) {
//             clearCart(); // Clear the cart after order is successful
//           }
//         } else {
//           setPaymentStatus(null); // Handle error
//         }
//       } catch (error) {
//         console.error('Payment verification failed:', error);
//         setPaymentStatus(null); // Set to null or handle error display
//       }
//     };

//     if (reference) {
//       verifyPayment();
//     }
//   }, [reference]);

//   return (
//     <div>
//       <h1>Payment Successful!</h1>
//       {paymentStatus ? (
//         <p>Your payment has been confirmed. Reference: {paymentStatus.data.reference}</p>
//       ) : (
//         <p>Verifying your payment...</p>
//       )}
//     </div>
//   );
// };

// export default PaymentSuccess;
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import useCartStore from '../../utills/store/cart';

// const PaymentSuccess = () => {
//   const location = useLocation();
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [cartData, setCartData] = useState([]);

//   const totalPrice = useCartStore((state) => state.totalPrice()); // This will make it reactive to changes
//   const cart = useCartStore((state) => state.cart);
//   const clearCart = useCartStore((state) => state.clearCart); // Get the clearCart method

//   const params = new URLSearchParams(location.search);
//   const reference = params.get('reference'); // Get reference from the URL if included

//   useEffect(() => {
//     const verifyPayment = async () => {
//       try {
//         const response = await axios.get(`https://backend-herbal.onrender.com/paystack/verify-payment?reference=${reference}`, {
//           withCredentials: true,
//           headers: {
//             'Cache-Control': 'no-cache',
//           },
//         });

//         if (response.data.status === 'success') {
//           console.log('Payment verification response:', response.data); // Log response
//           setPaymentStatus(response.data.data);

//           // Send cart data to the backend and receive response
//           const order = await axios.post(
//             'https://backend-herbal.onrender.com/orders/63687312-b14e-400c-9afe-af49db794cc8', 
//             cart, // The cart array
//             {
//               withCredentials: true,
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           );
//           console.log('Order response:', order.data); // This will log the updated array of orders
//           setCartData(order.data); // Set the returned orders in state
          
//           if (order.status === 200) {
//             clearCart(); // Clear the cart after order is successful
//           }
//         } else {
//           setPaymentStatus(null); // Handle error
//         }
//       } catch (error) {
//         console.error('Payment verification failed:', error);
//         setPaymentStatus(null); // Set to null or handle error display
//       }
//     };

//     if (reference) {
//       verifyPayment();
//     }
//   }, [reference]);

//   return (
//     <div>
//       <h1>Payment Successful!</h1>
//       {paymentStatus ? (
//         <p>Your payment has been confirmed. Reference: {paymentStatus.data.reference}</p>
//       ) : (
//         <p>Verifying your payment...</p>
//       )}
//     </div>
//   );
// };

// export default PaymentSuccess;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import useCartStore from '../../utills/store/cart';

const PaymentSuccess = () => {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [orderError, setOrderError] = useState(null); // To handle any order creation errors

  const totalPrice = useCartStore((state) => state.totalPrice()); // Reactive total price
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const params = new URLSearchParams(location.search);
  const reference = params.get('reference'); // Get reference from the URL if included

  useEffect(() => {
    const verifyPayment = async () => {
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

          // Send cart data to the backend and create the order
          try {
            const orderResponse = await axios.post(
              'https://backend-herbal.onrender.com/orders/63687312-b14e-400c-9afe-af49db794cc8',
              { items: cart }, // Wrapping cart data correctly
              {
                withCredentials: true,
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log('Order response:', orderResponse.data);
            setCartData(orderResponse.data.data); // Set returned order data

            if (orderResponse.status === 200) {
              clearCart(); // Clear cart after order is created
            }
          } catch (orderError) {
            console.error('Order creation failed:', orderError);  // This will show the full error response
              setOrderError('Failed to create order. Please try again.');
          }
        } else {
          setPaymentStatus(null); // Handle failed payment verification
        }
      } catch (error) {
        console.error('Payment verification failed:', error);
        setPaymentStatus(null);
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference, cart, clearCart]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      {paymentStatus ? (
        <>
          <p>Your payment has been confirmed. Reference: {paymentStatus.reference}</p>
          {orderError ? (
            <p style={{ color: 'red' }}>{orderError}</p>
          ) : (
            <p>Order created successfully!</p>
          )}
        </>
      ) : (
        <p>Verifying your payment...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
