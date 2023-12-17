import React from 'react';
import { FaUser, FaEnvelope, FaBell, FaCog } from 'react-icons/fa';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/profile">
      <div className="sidebar-item">
        <FaUser className="icon" />
        <span>Profile</span>
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
      </Link> 
    </div>
  );
};

export default Sidebar;
