import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Logic to handle registration
    axios.post('https://www.localhost:3000/api/register', {
      username,
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
        if(err.response.status === 400){
          document.getElementById('register-status').innerHTML = "User already exist with same email";
        }
      }
    })
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
        <h5 id="register-status"></h5>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Register;
