import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic to handle login
    axios.post('https://www.localhost:3000/api/login', {
      email,
      password
    }).then((data) => {
      console.log(data.data.token);
      localStorage.setItem("token", data.data.token);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      if(err.response.status === 400){
        document.getElementById('login-status').innerHTML = "Invalid Credentials";
      }
    })
  };

  return (
    <div className='new-div'>
      <div className='Login auth-box'>
      <div>
        <h3>Login to your account</h3>
      </div>
      <div className='main'>
        <h5>Email</h5>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <h5>Password</h5>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <br></br>
        <button onClick={handleLogin}>Login</button>
        <h5 id="login-status"></h5>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Login;
