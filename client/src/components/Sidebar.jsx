import React from 'react';
import { FaUser, FaEnvelope, FaBell, FaCog } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
      <div className="sidebar-item">
        <FaEnvelope className="icon" />
        <span>Messages</span>
      </div>
      <div className="sidebar-item">
        <FaBell className="icon" />
        <span>Notifications</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="icon" />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
