import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          {/* Profile picture */}
        </div>
        <div className="profile-info">
          <h1>Username</h1>
          <div className="stats">
            <span>Posts: 100</span>
            <span>Followers: 500</span>
            <span>Following: 200</span>
          </div>
          <p>Bio</p>
        </div>
      </div>
      <div className="profile-posts">
        {/* Display user posts */}
      </div>
    </div>
  );
};

export default Profile;
