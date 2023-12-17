import React, { useState } from 'react';
import { FaGlobe, FaPlus } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import "../styles/Navbar.css";

const NavBar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <div className='navbar'>
      <div className="left-section">
        <div className="profile" onClick={toggleProfileDropdown}>
          <FiUser />
        </div>
        <div className="logo">
          <FaGlobe />
          <span>SocialHub</span>
        </div>
      </div>

      <div className="middle-section">
        <div className="add-post">
          <FaPlus />
          <span>Add Post</span>
        </div>
      </div>

      <div className="right-section">
        <div className="profile" onClick={toggleProfileDropdown}>
          <FiUser />
        </div>

        {showProfileDropdown && (
          <div className="profile-dropdown">
            <ul>
              <li>My Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
