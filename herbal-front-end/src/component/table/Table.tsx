

// import React from 'react';
// import { Table, Space, Button } from 'antd';
// import useCartStore from '../../utills/store/cart';
// // import useCartStore from './path/to/cartStore'; // Import the Zustand store

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const CartTable: React.FC = () => {
//   const cart = useCartStore((state) => state.cart); // Fetch the cart from Zustand store
//   const removeFromCart = useCartStore((state) => state.removeFromCart); // Fetch the remove function from Zustand store

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Price',
//       dataIndex: 'price',
//       key: 'price',
//       render: (price: number) => `$${price.toFixed(2)}`, // Format price
//     },
//     {
//       title: 'Quantity',
//       dataIndex: 'quantity',
//       key: 'quantity',
//     },
//     {
//       title: 'Total',
//       key: 'total',
//       render: (_: any, record: CartItem) => `$${(record.price * record.quantity).toFixed(2)}`, // Calculate total
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_: any, record: CartItem) => (
//         <Space size="middle">
//           <Button onClick={() => removeFromCart(record.id)} danger>
//             Remove
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={cart.map((item) => ({
//         key: item.id, // Use 'key' for unique identification in Table
//         name: item.name,
//         price: item.price,
//         quantity: item.quantity,
//         total: item.price * item.quantity,
//       }))}
//       pagination={false}
//     />
//   );
// };

// export default CartTable;
// import React from 'react';
// import { Table, Space, Button } from 'antd';
// import useCartStore from '../../utills/store/cart';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const CartTable: React.FC = () => {
//   const cart = useCartStore((state) => state.cart); // Fetch the cart from Zustand store
//   const removeFromCart = useCartStore((state) => state.removeFromCart); // Fetch the remove function from Zustand store

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Price',
//       dataIndex: 'price',
//       key: 'price',
//       render: (price: number) => `$${price.toFixed(2)}`, // Format price
//     },
//     {
//       title: 'Quantity',
//       dataIndex: 'quantity',
//       key: 'quantity',
//     },
//     {
//       title: 'Total',
//       key: 'total',
//       render: (_: any, record: CartItem) => `$${(record.price * record.quantity).toFixed(2)}`, // Calculate total
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_: any, record: CartItem) => (
//         <Space size="middle">
//           <Button
//             onClick={() => {
//               console.log(`Removing item with id: ${record.id}`); // Debug log
//               removeFromCart(record.id); // Remove item from cart
//             }}
//             danger
//           >
//             Remove
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={cart.map((item) => ({
//         key: item.id, // Use 'key' for unique identification in Table
//         name: item.name,
//         price: item.price,
//         quantity: item.quantity,
//         total: item.price * item.quantity,
//       }))}
//       pagination={false}
//     />
//   );
// };

import React from 'react';
import { Table, Space, Button } from 'antd';
import useCartStore from '../../utills/store/cart';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartTable: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Columns definition for the Table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`, 
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      key: 'total',
      render: (_: any, record: CartItem) => `$${(record.price * record.quantity).toFixed(2)}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: CartItem) => (
        <Space size="middle">
          <Button
            onClick={() => {
              console.log(`Removing item with id: ${record.id}`); // Debug log to check if ID is available
              removeFromCart(record.id);
            }}
            danger
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];
  
  const totalPrice = useCartStore((state) => state.totalPrice);
  // Ensure that 'key' field is set to 'id' for unique identification
  const dataSource = cart.map((item) => ({
    key: item.id, // 'key' should be the unique 'id' of each item
    id: item.id,  // Make sure 'id' is passed down properly
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity,
  }));

  return (
   <>
     <Table
      columns={columns}
      dataSource={dataSource} // Ensure the data source has proper 'id' and 'key'
      pagination={false}
    />
    <div>
      <h3>Total Price: ${totalPrice().toFixed(2)}</h3> {/* Call the function to get the total */}
    </div>
   </>
  );
};

export default CartTable;
