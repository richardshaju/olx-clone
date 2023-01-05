import React from 'react'
import './Chat.css'
function Chat() {
  return (
    <div className='chat'>
      <div className="parent">
        <div className="left">
          <div className="head">
            <h4>INBOX</h4>
            <div className="buttons">

            </div>
          </div>
          <div className="options">
            <p>Quick Filters</p>
            <div className="buttons">
              <p>All</p>
              <p>Meeting</p>
              <p>Unread</p>
              <p>Important</p>
            </div>
          </div>
          <div className="chats">

          </div>
        </div>
        <div className="right">
          <div className="top">

          </div>
          <div className="message-box">

          </div>
          <div className="input-box">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat