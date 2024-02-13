import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic to handle login
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
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Login;
