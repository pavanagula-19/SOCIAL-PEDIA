import React from 'react';
import './ProfileSection.css';
import Icon from './icon.avif'
const ProfileSection = () => {
  return (
    <div className='profile-section-parent'>
      <div className='profile-section-layout'>
        <div className='profile-pic'>
         
          <img src={Icon} alt='Profile' />
          <div className='edit-icon'>✏️</div>
        </div>
        <div className='profile-details'>
          <div className='username'>John Doe</div>
          <div className='changepassword'>
            <a href='#'>Change Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
