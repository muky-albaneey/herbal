import React from 'react';
import { Table, Space, Button, InputNumber } from 'antd';
import useCartStore from '../../utills/store/cart';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  // React.useEffect(() => {
//   if (!isAuthenticated) {
//     navigate('/auth/signup');
//   }
// }, [isAuthenticated, navigate]);
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
          <InputNumber min={1} value={quantity} style={{ width: '60px' }} readOnly />
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
            onClick={() => removeFromCart(record.id)}
            danger
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const dataSource = cart.map((item) => ({
    key: item.id,
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity,
  }));

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <div>
        <h3>Total Price: Naira{totalPrice.toFixed(2)}</h3>
      </div>
    </>
  );
};

export default CartTable;
