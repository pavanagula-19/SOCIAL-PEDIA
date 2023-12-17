import React, { useState } from 'react';
import { loginCredentials } from '../utils/DataApi';
import { useDispatch } from 'react-redux';
import { addUsers } from '../utils/userSlice';


const Login = () => {
  const dispatch = useDispatch()
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });
    const userLogin = async ()=>{    
        const user = await loginCredentials(loginDetails)
        if(user.status){
          localStorage.setItem("user",JSON.stringify(loginDetails))
          dispatch(addUsers(loginDetails))
        }
    }
  return (
    <div className='login-form'>
      <div className='signup-header'>SOCIAL HUB ...</div>
      <div className='signup-header-text'>Log In</div>
      <div className='signup-credentials'>
        <div className='username'>
          <label>Email : </label>
          <input type='text' placeholder='Enter email ...' onChange={(e)=>{
            setLoginDetails((prev)=>({
              ...prev,
              email: e.target.value  
            }))
          }} value={loginDetails.email}/>
        </div>
        <div className='password'>
          <label>Password : </label>
          <input type='password' placeholder='Enter password ...' onChange={(e)=>{
            setLoginDetails((prev)=>({
                ...prev,
                password: e.target.value
            }))
          }} value={loginDetails.password}/>
        </div>
        <div className='signup-btn' onClick={userLogin}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default Login;
