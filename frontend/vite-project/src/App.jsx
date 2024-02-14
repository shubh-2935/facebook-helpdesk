import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import ConnectFacebook from '../components/ConnectFacebook';
import DeleteFacebook from '../components/DeleteFacebook';
import AgentScreen from '../components/AgentScreen';

const App = () => {
  const isAuthenticated = localStorage.getItem('token'); 

  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={isAuthenticated ? <Navigate to="/connect-facebook" /> : <Login />} /> 
        <Route path="/register" element={isAuthenticated ? <Navigate to="/connect-facebook" /> : <Register />} />
        <Route path="/connect-facebook" element={isAuthenticated ? <ConnectFacebook /> : <Navigate to="/" /> } />
        <Route path="/delete-facebook" element={isAuthenticated ? <DeleteFacebook /> : <Navigate to="/" />} />
        <Route path="/agent-screen" element={isAuthenticated ? <AgentScreen /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
