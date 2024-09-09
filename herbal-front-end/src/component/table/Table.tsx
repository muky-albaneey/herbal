import React from 'react';
import { Table, Space, Button, InputNumber } from 'antd';
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
  const addToCart = useCartStore((state) => state.addToCart);

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
      render: (quantity: number, record: CartItem) => (
        <Space>
          <Button
            onClick={() => {
              if (quantity > 1) {
                addToCart({ ...record, quantity: -1 }); // Decrease quantity
              }
            }}
            size="small"
          >
            -
          </Button>
          <InputNumber
            min={1}
            value={quantity}
            style={{ width: '60px' }}
            readOnly
          />
          <Button
            onClick={() => {
              addToCart({ ...record, quantity: 1 }); // Increase quantity
            }}
            size="small"
          >
            +
          </Button>
        </Space>
      ),
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
