import React from 'react';
import './profile.css';
import {useState, useEffect} from 'react'

const Profile = () => {
  const [posts , setPosts] = useState([])
  let data = [
    {id:1, name:'ankit', },
    {id:2, name:'ankit', },
    {id:3, name:'ankit', },
    {id:4, name:'ankit', },
    {id:5, name:'ankit', },
  ]


  useEffect(()=>{
    setTimeout(()=>{setPosts(data)}, 2000)
  }, [])


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
        {posts?.length>0 ? <ol>

          {posts.map(d=><li>

            {d.name}
          </li>
            )}
        </ol>
          :'Loading...'}
      </div>
    </div>
  );
};

export default Profile;
