import React from 'react';

const ConnectFacebook = () => {
  const handleConnect = () => {
    // Logic to connect Facebook page
  };

  return (
    <div className='new-div'>
      <div className='auth-box connect'>
        <h2>Facebook Page Integration</h2>
        <button onClick={handleConnect}>Connect Page</button>
      </div>
    </div>
  );
};

export default ConnectFacebook;
