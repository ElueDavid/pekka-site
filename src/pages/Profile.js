import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <h1>My Profile</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="New Password" />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
