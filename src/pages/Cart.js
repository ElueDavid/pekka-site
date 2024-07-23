import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', image: '/path/to/product1.jpg', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', image: '/path/to/product2.jpg', price: 39.99, quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
