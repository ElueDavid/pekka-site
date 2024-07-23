import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Here you can manage your profile, orders, and more.</p>
      <div className="dashboard-links">
        <a href="/orders">My Orders</a>
        <a href="/profile">My Profile</a>
        <a href="/wishlist">My Wishlist</a>
      </div>
    </div>
  );
};

export default Dashboard;
