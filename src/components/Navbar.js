import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">pekka</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/contact">Contact Us</a>
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
