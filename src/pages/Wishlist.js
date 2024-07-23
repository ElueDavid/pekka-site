import React from 'react';
import ProductCard from '../components/ProductCard';

const wishlistItems = [
  { id: 1, name: 'Product 1', image: '/path/to/product1.jpg', price: 29.99 },
  { id: 2, name: 'Product 2', image: '/path/to/product2.jpg', price: 39.99 },
];

const Wishlist = () => {
  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="products">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
