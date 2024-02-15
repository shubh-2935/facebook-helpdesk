import React from 'react';

const DeleteFacebook = () => {
  
  const handleDelete = () => {

      //if we do have a non-null response.session, call FB.logout(),
      //the JS method will log the user out of Facebook and remove any authorization cookies
      FB.logout((response) => {
        //if we dont have a session (which means the user has been logged out, redirect the user)
        if (!response.session) {
            window.location = "/connect-facebook";
            return;
        }
      });
      
  }

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
