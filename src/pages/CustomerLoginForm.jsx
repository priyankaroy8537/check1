
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerLoginForm = () => {
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/api/customers/login', {
        params: {
          email: email,
          password  : pan
        }
      });
      console.log('Login successful:', response.data);
      //navigate('/customer-dashboard');
      const customerId = response.data.customerID;
      console.log(customerId);
      console.log('Login successful:', response.data);
      navigate(`/customer-dashboard/${customerId}/products`);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or PAN');
    }
  };

  return (
    <div>
      <h2>Customer Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>PassWord:</label>
          <input
            type="password"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CustomerLoginForm;
