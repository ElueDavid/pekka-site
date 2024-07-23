import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, date: '2024-07-01', total: 59.98, items: ['Product 1', 'Product 2'] },
    { id: 2, date: '2024-07-15', total: 29.99, items: ['Product 3'] },
  ];

  return (
    <div className="orders">
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order">
          <h3>Order #{order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
          <p>Items: {order.items.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
