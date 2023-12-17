
import React from 'react';
import { FaUserPlus, FaUserTimes, FaFacebookMessenger , FaSearch } from 'react-icons/fa'; 
import './Friends.css';

const Friends = () => {
  return (
    <div className='connections-parent'>
      <div className='connection-requests'>
        <div className='connection-request-header'>
          Requests
        </div>
        <div className='connection-request-fields'>
          <div className='connection-request-profile'>
            <FaUserPlus />
          </div>
          <div className='connection-request-name'>
            Friends 4
          </div>
          <div className='connection-request-buttons'>
            <button className='cancel-button'>
              <FaUserTimes />
              Cancel
            </button>
            <button className='add-button'>
              <FaUserPlus />
              Add
            </button>
          </div>
        </div>
        <div className='connection-request-fields'>
          <div className='connection-request-profile'>
            <FaUserPlus />
          </div>
          <div className='connection-request-name'>
            Friends 5
          </div>
          <div className='connection-request-buttons'>
            <button className='cancel-button'>
              <FaUserTimes />
              Cancel
            </button>
            <button className='add-button'>
              <FaUserPlus />
              Add
            </button>
          </div>
        </div>
      </div>
      <div className='connections-list'>
        <div className='connections-list-header'>
          All Connections
        </div>
        <div className='connections-list-friends'>
          <div className='connections-search'>
            <FaSearch className='search-icon' />
            <input type='text' placeholder='Search' />
          </div>
          <div className='connections-list-body'>
          <div className='connections-list-fields'>
            <div className='connection-list-profile'>
              
            </div>
            <div className='connection-list-name'>
              Friend 1
            </div>
            <div className='connection-list-message'>
            <FaFacebookMessenger />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
