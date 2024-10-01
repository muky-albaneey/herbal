// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import useCartStore from '../../utills/store/cart';

// const PaymentSuccess = () => {
//   const location = useLocation();
//   const [paymentStatus, setPaymentStatus] = useState(null);

//   const totalPrice = useCartStore((state) => state.totalPrice()); // This will make it reactive to changes
//   const cart = useCartStore((state) => state.cart);


// console.log(totalPrice)
// console.log(cart)

// const [cartData, setcartData] = React.useState([])

//   const params = new URLSearchParams(location.search);
//   const reference = params.get('reference'); // Get reference from the URL if included

//   useEffect(() => {
//     const verifyPayment = async () => {
//       try {
//         const response = await axios.get(`https://backend-herbal.onrender.com/paystack/verify-payment?reference=${reference}`,
//           {
//             withCredentials: true,
//             headers: {
//               'Cache-Control': 'no-cache',
//             },
//     }
//         );
       
//         if (response.data.status === 'success') {
//           console.log('Payment verification response:', response.data); // Log response
//           setPaymentStatus(response.data.data);
//           console.log(paymentStatus);
//           setcartData(cart)
//             const order = await axios.post(
//               'https://backend-herbal.onrender.com/orders/63687312-b14e-400c-9afe-af49db794cc8', 
//               cartData,
//               {
//                   withCredentials: true, 
//                   headers: {
//                       'Content-Type': 'application/json',
//                   },
//               }
//           );

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

  const totalPrice = useCartStore((state) => state.totalPrice()); // This will make it reactive to changes
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart); // Get the clearCart method

  const [cartData, setcartData] = useState([]);

  const params = new URLSearchParams(location.search);
  const reference = params.get('reference'); // Get reference from the URL if included

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.get(`https://backend-herbal.onrender.com/paystack/verify-payment?reference=${reference}`, {
          withCredentials: true,
          headers: {
            'Cache-Control': 'no-cache',
          },
        });

        if (response.data.status === 'success') {
          console.log('Payment verification response:', response.data); // Log response
          setPaymentStatus(response.data.data);
          setcartData(cart);

          const order = await axios.post(
            'https://backend-herbal.onrender.com/orders/63687312-b14e-400c-9afe-af49db794cc8', 
            cartData,
            {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (order.status === 200) {
            clearCart(); // Clear the cart after order is successful
          }
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
        <p>Your payment has been confirmed. Reference: {paymentStatus.data.reference}</p>
      ) : (
        <p>Verifying your payment...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
