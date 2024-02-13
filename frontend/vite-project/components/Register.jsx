import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Logic to handle registration
  };

  return (<div className='new-div'>
    <div className='Register auth-box'>
      <div>
        <h3>Create Account</h3>
      </div>
      <div>
        <h5>Name</h5>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <h5>Email</h5>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <h5>Password</h5>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <br></br>
        <button onClick={handleRegister}>Sign Up</button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Register;
