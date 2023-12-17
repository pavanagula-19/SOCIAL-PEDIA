import React from 'react';
import { FaUser, FaEnvelope, FaBell, FaCog, FaUserFriends } from 'react-icons/fa';
import { MdOutlineLogout } from "react-icons/md";
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch()
  const logoutUSer = ()=>{
      dispatch(removeUser())
  }
  return (
    <div className="sidebar">
      <Link to="/profile">
      <div className="sidebar-item">
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
      </Link>
      <Link to='/connections'>
      <div className="sidebar-item">
      <FaUserFriends className="icon"/>
        <span>Connections</span>
      </div>
      </Link>
      <Link to='/messages'>
      <div className="sidebar-item">
        <FaEnvelope className="icon" />
        <span>Messages</span>
      </div>
      </Link>
      <Link to='/notification'>
      <div className="sidebar-item">
        <FaBell className="icon" />
        <span>Notifications</span>
      </div>
      </Link>
     <Link to='/settings'><div className="sidebar-item">
        <FaCog className="icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-logout" onClick={logoutUSer}>
        <MdOutlineLogout className="icon" />
        <span>Logout</span>
      </div>
      </Link> 
    </div>
  );
};

export default Sidebar;
