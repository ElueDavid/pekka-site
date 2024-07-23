import React from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { name: 'Electronics', image: '/path/to/electronics.jpg' },
  { name: 'Fashion', image: '/path/to/fashion.jpg' },
  { name: 'Home & Kitchen', image: '/path/to/home-kitchen.jpg' },
];

const Categories = () => {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
