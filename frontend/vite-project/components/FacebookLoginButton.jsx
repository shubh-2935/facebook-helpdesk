import React from 'react';
import { useNavigate } from 'react-router-dom';

function statusChangeCallback(response) {

    const navigate = useNavigate();

    if (response.status === 'connected') {
      // User is logged into Facebook and your app
      console.log('User is logged in with response as');
      console.log(response);
      // Redirect to logged in experience or perform other actions
      navigate('/agent-screen');
    } else if (response.status === 'not_authorized') {
      // User is logged into Facebook but not your app
      console.log('User is not authorized');
      // Prompt with the Login dialog or show Login Button
      navigate('/');
    } else {
      // User is not logged into Facebook, or FB.logout() was called
      console.log('User is not logged in');
      // Prompt with the Login dialog or show Login Button
      navigate('/connect-facebook');
    }
  }

function FacebookLoginButton() {
  // Function to handle login state
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  return (
    <div>
      {/* Add the Facebook Login Button */}
      <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
      </fb:login-button>
    </div>
  );
}

export default FacebookLoginButton;
