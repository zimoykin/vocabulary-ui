import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const host = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${host}/api/v1/auth/login`, { email, password });
      if (response.status === 200 && response?.data?.accessToken) {
        localStorage.setItem('refresh', response.data.refreshToken);

        toast.success('Login successful!', {
          toastId: Login.name,
        });

        dispatch(
          login(response.data.accessToken)
        );
        navigate('/profile');
      } else {
        toast.error('Login failed!', {
          toastId: Login.name,
        });
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      toast.error('Login failed!', {
        toastId: Login.name,
      });
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
