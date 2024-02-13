import React from 'react';

const DeleteFacebook = () => {
  const handleDelete = () => {
    // Logic to delete Facebook page
  };

  return (
    <div className='new-div'>
      <div className='auth-box connect disconnect'>    
        <h2>Facebook Page Integration</h2>
        <button className='delete' onClick={handleDelete}>Delete Integration</button>
        <button>Reply to Messages</button>
      </div>
    </div>
  );
};

export default DeleteFacebook;
