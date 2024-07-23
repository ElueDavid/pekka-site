import React from 'react';
import Carousel from '../components/Carousel';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

const categories = [
  { name: 'Electronics', image: '/path/to/electronics.jpg' },
  { name: 'Fashion', image: '/path/to/fashion.jpg' },
  { name: 'Home & Kitchen', image: '/path/to/home-kitchen.jpg' },
];

const products = [
  { id: 1, name: 'Product 1', image: '/path/to/product1.jpg', price: 29.99 },
  { id: 2, name: 'Product 2', image: '/path/to/product2.jpg', price: 39.99 },
  { id: 3, name: 'Product 3', image: '/path/to/product3.jpg', price: 49.99 },
];

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <h2>Categories</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <h2>Featured Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
