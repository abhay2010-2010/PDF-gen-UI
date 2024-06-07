import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [token,setToken]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://pdf-generator-5ib7.onrender.com/pdf/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password, role }),
      });


      
      const data = await response.json();

      if (response.ok) {
        // Reset form fields or show success message
        setEmail('');
        setUsername('');
        setPassword('');
        setRole('');
        // localStorage.setItem(data.token);
        console.log(data)
        alert('Login successful!');
      } else {
        console.error('Failed to login:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="email">
            Email:
          </label>
          <input
            style={inputStyle}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="username">
            Username:
          </label>
          <input
            style={inputStyle}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="password">
            Password:
          </label>
          <input
            style={inputStyle}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="role">
            Role:
          </label>
          <select
            style={inputStyle}
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button style={buttonStyle} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;