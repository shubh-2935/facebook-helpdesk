import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from '../components/Login';
import Register from '../components/Register';
import ConnectFacebook from '../components/ConnectFacebook';
import DeleteFacebook from '../components/DeleteFacebook';
import AgentScreen from '../components/AgentScreen';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/connect-facebook" element={<ConnectFacebook />} />
        <Route path="/delete-facebook" element={<DeleteFacebook />} />
        <Route path="/agent-screen" element={<AgentScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
