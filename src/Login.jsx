import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-card text-center">
        <div className="card-body">
          <div className="logo-container">
            <img src="Icons_music_platform/icon_logo.png" alt="Music Platform Logo" className="login-logo" />
          </div>
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Log in to continue to Music</p>

          <div className="social-login">
            <button className="social-btn google-btn" type="button">
              <i className="fa-brands fa-google social-icon"></i> <span>Continue with Google</span>
            </button>
            <button className="social-btn facebook-btn" type="button">
              <i className="fa-brands fa-facebook social-icon"></i> <span>Continue with Facebook</span>
            </button>
            <button className="social-btn apple-btn" type="button">
              <i className="fa-brands fa-apple social-icon"></i> <span>Continue with Apple</span>
            </button>
            <button className="social-btn phone-btn" type="button">
              <i className="fa-solid fa-phone social-icon"></i> <span>Continue with Phone Number</span>
            </button>
          </div>

          <hr className="divider" />

          <form>
            <div className="input-group">
              <input type="email" className="form-input" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="password" className="form-input" placeholder="Password" required />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot your password?</a>
            </div>
            <Link to="/home">
              <button type="submit" className="login-btn">Log In</button>
            </Link>
          </form>

          <p className="signup-text">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};
