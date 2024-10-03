// import { TbCurrencyNaira } from "react-icons/tb"; 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuthStoreUser } from '../../utills/store/auth';
// import { decode } from 'jwt-js-decode';
// import { useNavigate } from 'react-router-dom';

// const UserOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const jwtToken = useAuthStoreUser((state) => state.jwtToken);

//   const decodeToken = (token) => {
//     if (token) {
//       try {
//         let jwt = decode(token);
//         console.log('Decoded JWT:', jwt.payload);
//         return jwt.payload;
//       } catch (error) {
//         console.error('Failed to decode JWT:', error);
//         return null;
//       }
//     }
//     return null;
//   };
  
//   const decodedToken = decodeToken(jwtToken);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         setLoading(true);
//         console.log(decodedToken?.sub);
//         const response = await axios.get(`https://backend-herbal.onrender.com/user/63687312-b14e-400c-9afe-af49db794cc8/single_user`); 
//         setOrders(response.data.orders); 
//         console.log(response.data.orders);
//       } catch (err) {
//         setError(err.message || 'Error fetching orders');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">User Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 border-b">Order ID</th>
//               <th className="py-2 px-4 border-b">Total Amount</th>
//               <th className="py-2 px-4 border-b">Delivery Fee</th>
//               <th className="py-2 px-4 border-b">Order Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length > 0 ? (
//               orders.map((order) => (
//                 <tr key={order.id} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border-b">{order.id}</td>
//                   <td className="py-2 px-4 border-b"><TbCurrencyNaira />{parseFloat(order.totalAmount).toFixed(2)}</td>
//                   <td className="py-2 px-4 border-b"><TbCurrencyNaira />{parseFloat(order.deliveryFee).toFixed(2)}</td>
//                   <td className="py-2 px-4 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center py-4">No orders found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserOrders;
import { TbCurrencyNaira } from "react-icons/tb"; 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStoreUser } from '../../utills/store/auth';
import { decode } from 'jwt-js-decode';
import { useNavigate } from 'react-router-dom';

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const jwtToken = useAuthStoreUser((state) => state.jwtToken);

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        console.log(decodedToken?.sub);
        const response = await axios.get(`https://backend-herbal.onrender.com/user/63687312-b14e-400c-9afe-af49db794cc8/single_user`); 
        setOrders(response.data.orders); 
        console.log(response.data.orders);
      } catch (err) {
        setError(err.message || 'Error fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-2 sm:px-4 border-b">Order ID</th>
              <th className="py-2 px-2 sm:px-4 border-b">Total Amount</th>
              <th className="py-2 px-2 sm:px-4 border-b">Delivery Fee</th>
              <th className="py-2 px-2 sm:px-4 border-b">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-2 px-2 sm:px-4 border-b">{order.id}</td>
                  <td className="py-2 px-2 sm:px-4 border-b flex items-center">
                    <TbCurrencyNaira /> {parseFloat(order.totalAmount).toFixed(2)}
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b flex items-center">
                    <TbCurrencyNaira /> {parseFloat(order.deliveryFee).toFixed(2)}
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrders;
