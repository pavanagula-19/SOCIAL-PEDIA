import React from 'react';
import { FaSearch, FaUser, FaVideo, FaPhone, FaRegSmile, FaPaperPlane } from 'react-icons/fa'; // Import icons
import './Messages.css';

const Messages = () => {
  return (
    <div className='messages-parent'>
      <div className='friends-list'>
        <div className='search-friends'>
          <FaSearch />
          <input type='text' placeholder='Search' />
        </div>
        <div className='select-friends'>
          <div className='friend'>
            <div className='chat-profile'>
              <FaUser />
            </div>
            <div className='chat-name'>Friend 1</div>
          </div>
          <div className='friend'>
            <div className='chat-profile'>
              <FaUser />
            </div>
            <div className='chat-name'>Friend 2</div>
          </div>
          <div className='friend'>
            <div className='chat-profile'>
              <FaUser />
            </div>
            <div className='chat-name'>Friend 3</div>
          </div>
        </div>
      </div>
      <div className='conversation'>
        <div className='conversation-header'>
          <div className='conversation-friend'>
            <div className='conversation-friend-icon'>
              <FaUser />
            </div>
            <div className='conversation-friend-name'>
              Friend 1
            </div>
          </div>
          <div className='conversation-calls'>
            <FaVideo className='conversation-video-call' />
            <FaPhone className='conversation-audio-call' />
          </div>
        </div>
        <div className='conversation-text'>
          <div className='conversation-text-body'>
            {/* Conversation text body goes here */}
          </div>
          <div className='conversation-footer'>
            <div className='conversation-message-field'>
              <div className='select-emojis'>
                <FaRegSmile />
              </div>
              <input />
            </div>
            <div className='conversation-message-send'>
              <FaPaperPlane />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
