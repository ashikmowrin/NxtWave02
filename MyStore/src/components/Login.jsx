import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();


    const credentials = {
      username: username, 
      password: password,
    };

  
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed: ' + response.statusText); 
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
        
          localStorage.setItem('token', data.token);
          console.log('Login successful:', data);
          navigate('/home');
          setErrorMessage('');
        } else {
          setErrorMessage('Invalid credentials');
          console.error('Login failed: Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
        setErrorMessage('Login failed: ' + error.message); 
      });
  };

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={handleLogin}>
        <h3>Login</h3>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>

        <Link to="/register">Create an Account</Link>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
