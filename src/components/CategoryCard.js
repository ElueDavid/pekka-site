import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
      <Link to={`/category/${category.name}`}>Shop Now</Link>
    </div>
  );
};

export default CategoryCard;
