import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}} /*  className="login-container" */>
      {/* <div className="login-form">
        <h1 className="logo">Instagram</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        <div className="separator">
          <span className="line"></span>
          <span className="text">OR</span>
          <span className="line"></span>
        </div>
        <button className="btn-fb">Log in with Facebook</button>
        <p className="forgot-password">Forgot password?</p>
      </div>
      <div className="sign-up-section">
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div> */}

<div className="profile-picture">
      <div className="story-border">
        {/* Your profile picture goes here */}
       <img src='https://images.mid-day.com/images/images/2023/jan/hugh-jan-elven_d.jpg' height={50} width={50}/>
      </div>
    </div>
      



 
    </div>
  );
};

export default Login;
