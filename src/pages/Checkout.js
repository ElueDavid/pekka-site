import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <h3>Shipping Address</h3>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Zip Code" />
        <h3>Payment Information</h3>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiration Date" />
        <input type="text" placeholder="CVV" />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
