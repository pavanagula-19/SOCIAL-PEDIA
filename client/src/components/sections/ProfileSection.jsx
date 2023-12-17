import React from 'react';
import './ProfileSection.css';
import Icon from './icon.avif';

const ProfileSection = () => {
  // Assume you have counts for each category
  const postsCount = 100;
  const connectionsCount = 200;
  const storiesCount = 50;

  return (
    <div className='profile-section-parent'>
      <div className='profile-section-layout'>
        <div className='profile-pic'>
          <img src={Icon} alt='Profile' />
          <div className='edit-icon'>✏️</div>
        </div>
        <div className='profile-details'>
          <div className='username'>
            <strong>John Doe</strong>
          </div>
          <div className='profile-details-more'>
            <div className='details-column'>
              <span className='count'>{postsCount}</span>
              <span className='details-label'>Posts</span>
            </div>
            <div className='details-column'>
              <span className='count'>{connectionsCount}</span>
              <span className='details-label'>Connections</span>
            </div>
            <div className='details-column'>
              <span className='count'>{storiesCount}</span>
              <span className='details-label'>Stories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
