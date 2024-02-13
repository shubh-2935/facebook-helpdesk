import React, { useState } from 'react';

const AgentScreen = () => {
  // Logic to fetch conversations and display them
  const [reply, setReply] = useState('');

  const handleConversationClick = (conversationId) => {
    // Logic to display selected conversation thread
  };

  const sendReply = () => {
    // Logic when click send button to send the reply to the messenger message
  };

  return (
    <div className='grid-container'>
      <div className="grid-item user-profile">
        <p>Shubham</p>
      </div>
      <div className="grid-item conversation-list">
        {/* Display list of conversations */}
        <div className="conversation" onClick={() => handleConversationClick(conversationId)}>
          Conversation 1
        </div>
        <div className="conversation" onClick={() => handleConversationClick(conversationId)}>
          Conversation 2
        </div>
        {/* More conversations */}
      </div>
      <div className="grid-item conversation-thread">
        {/* Display conversation thread */}
        <div className='messages'>
          <div className="message">Message 1</div>
          <div className="message">Message 2</div>
          {/* More messages */}
        </div>
        <div className='reply-input'>
          <input type='text' placeholder='Reply here' onChange={(e) => {setReply(e.target.value)}}/>
          <button onClick={sendReply}>Send</button>
        </div>
      </div>
      <div className="grid-item customer-profile">
        {/* Display customer's profile */}
        <h3>Customer Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        {/* More profile information */}
      </div>
    </div>
  );
};

export default AgentScreen;
