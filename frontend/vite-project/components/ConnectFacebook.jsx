import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConnectFacebook = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        
        setLoggedIn(true);
        // Fetch user's name if logged in
        fetchUserName();
      } else {
        setLoggedIn(false);
        
      }
    });
  };

  const fetchUserName = () => {
    FB.api('/me', { fields: 'name' }, function(response) {
      setUserName(response.name); // Update state with user's name
    });
  };

  const callThis = () => {
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information....');
        fetchUserName(); // Fetch user's name after login
        setLoggedIn(true);
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };

  return (
    <div className='new-div'>
      <div className='auth-box connect disconnect'>
        <h2>Facebook Page Integration</h2>
        {loggedIn ? (
          <div style={{
              "display": "flex",
              "flexDirection": "column",
              "alignItems": "center",
              "justifyContent": "center",
              }}>
            {userName && 
              <>
              <h3>Hello, {userName}!</h3>
              <br></br>
              <div style={{"display": "flex",
                "alignItems": "center",
                "flexDirection": "column",
              }}>
                <button style={{margin: 0}} onClick={() => { navigate('/agent-screen') }}>Reply to Messages</button>
                <button className='delete' style={{margin: '5px 0 0'}} onClick={() => { navigate('/delete-facebook') }}>Delete Integration</button>
              
              </div>
              </>
                }
            
          </div>
        ) : (
          <button id="loginBtn" onClick={callThis}>Login with Facebook</button>
        )}
      </div>
    </div>
  );
};

export default ConnectFacebook;
