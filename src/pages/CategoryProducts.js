import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or database based on category
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?category=${name}`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [name]);

  return (
    <div className="category-products">
      <h1>{name} Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
