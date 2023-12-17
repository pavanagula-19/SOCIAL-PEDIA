// LandingPage.js
import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
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
        {showLogin ? <Login /> : <SignUp />}
        <div className='login' onClick={toggleLogin}>
          -----or {showLogin ? 'Sign Up' : 'Login'}-----
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
