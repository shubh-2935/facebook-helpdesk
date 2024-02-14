import React, { useState, useEffect } from 'react';

const ConnectFacebook = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1528586027742258',
        cookie     : true,
        xfbml      : true,
        version    : 'v19.0'
      });

      // Check login status when the SDK is initialized
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          setLoggedIn(true);
          testAPI(); // Fetch user information
        }
      });
    };

    // Load the SDK script
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);   
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const handleConnect = () => {
    // Initiate the Facebook login flow
    FB.login(function(response) {
      if (response.authResponse) {
        setLoggedIn(true);
        testAPI(); // Fetch user information
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'email' });
  };

  const testAPI = () => {
    // Fetch user information using the Graph API
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name + ' and the details are below');
      console.log(response);
      // Handle user information as needed
    });
  };

  return (
    <div className='new-div'>
      <div className='auth-box connect'>
        <h2>Facebook Page Integration</h2>
        {!loggedIn ? (
          <button onClick={handleConnect}>Connect Page</button>
        ) : (
          <p>You are logged in with Facebook.</p>
        )}
        <div className="fb-login-button" scope="public_profile,email" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">
        </div>
        <div id="status">
        </div>
      </div>
    </div>
  );
};

export default ConnectFacebook;
