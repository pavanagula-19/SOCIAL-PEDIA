import React, { useState } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className='landing-page'>
      <div className='landing-page-image'></div>
      <div className='signup-card'>
        <div className='signup-header'>SOCIAL HUB ...</div>
        <div className='signup-header-text'>
          {showLogin ? 'Log In' : 'Sign Up'}
        </div>
        <div className='signup-credentials'>
          <div className='username'>
            <label>User Name : </label>
            <input type='text' placeholder='Enter username ...'></input>
          </div>
          {showLogin || (
            <div className='email'>
              <label>Email : </label>
              <input type='email' placeholder='Enter email ...'></input>
            </div>
          )}
          <div className='password'>
            <label>Password : </label>
            <input type='password' placeholder='Enter password ...'></input>
          </div>
          <div className='signup-btn' onClick={toggleLogin}>
            {showLogin ? 'Log In' : 'Create Account'}
          </div>
          <div className='login' onClick={toggleLogin}>
            -----or {showLogin ? 'Sign Up' : 'Login'}-----
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
