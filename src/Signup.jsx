import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaText, setCaptchaText] = useState(generateCaptcha());

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  function refreshCaptcha() {
    setCaptchaText(generateCaptcha());
    setCaptchaInput('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaText) {
      alert("Captcha incorrect. Please try again.");
      return;
    }
    // Submit logic here
    window.location.href = "/home";
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-card text-center">
        <div className="card-body">
          <div className="logo-container">
            <img src="Icons_music_platform/icon_logo.png" alt="Music Platform Logo" className="login-logo" />
          </div>
          <h2 className="login-title">Create an Account</h2>
          <p className="login-subtitle">Sign up to start your journey with Music</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" className="form-input" placeholder="Username" required />
            </div>
            <div className="input-group">
              <input type="email" className="form-input" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="password" className="form-input" placeholder="Password" required />
            </div>
            <div className="input-group">
              <input type="password" className="form-input" placeholder="Confirm Password" required />
            </div>

            {/* CAPTCHA SECTION */}
            <div className="input-group d-flex align-items-center">
              <input
                type="text"
                className="form-input"
                placeholder="Enter Captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="captcha-box">
                <strong>{captchaText}</strong>
              </div>
              <button type="button" className="refresh-captcha" onClick={refreshCaptcha}>
                Refresh
              </button>
            </div>

            <button type="submit" className="login-btn">Sign Up</button>
          </form>

          <p className="signup-text">Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};
