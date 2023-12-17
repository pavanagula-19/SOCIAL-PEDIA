// SignUp.js
import React, { useState } from 'react';
import { registerDetails } from '../utils/DataApi';

const SignUp = () => {
  const [userRegister, setRegister] = useState({
    userName: '',
    email: '',
    password:''
  })
  const signupDetails = async ()=>{
        await registerDetails(userRegister)
  }
  return (
    <div className='signup-form'>
      <div className='signup-header'>SOCIAL HUB ...</div>
      <div className='signup-header-text'>Sign Up</div>
      <div className='signup-credentials'>
        <div className='username'>
          <label>User Name : </label>
          <input type='text' placeholder='Enter username ...' onChange={(e)=>{
            setRegister((prev)=>({
              ...prev,
              userName: e.target.value
            }))
          }} value={userRegister.userName}/>
        </div>
        <div className='email'>
          <label>Email : </label>
          <input type='email' placeholder='Enter email ...' onChange={
            (e)=>{
            setRegister((prev)=>({
              ...prev,
              email: e.target.value
            }))
            }} value={userRegister.email}/>
        </div>
        <div className='password'>
          <label>Password : </label>
          <input type='password' placeholder='Enter password ...' onChange={(e)=>{
            setRegister((prev)=>({
              ...prev,
              password: e.target.value
            }))
          }}/>
        </div>
        <div className='signup-btn' onClick={signupDetails}>
          Create Account
        </div>
      </div>
    </div>
  );
};

export default SignUp;
