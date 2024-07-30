import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MerchantLoginForm = () => {
  const [merchantEmail, setMerchantEmail] = useState('');
  const [merchantCode, setMerchantCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/merchants/login', {
        params: {
          merchantEmail: merchantEmail,
          merchantpassword: merchantCode
        }
      });
      console.log('Login successful:', response.data);
      const merchantId = response.data.merchantID;
      // Redirect to the merchant dashboard with merchant data
      navigate(`/merchant-dashboard/${merchantId}`, { state: { merchant: response.data } });
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred during login. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Merchant Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={merchantEmail}
            onChange={(e) => setMerchantEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={merchantCode}
            onChange={(e) => setMerchantCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MerchantLoginForm;
