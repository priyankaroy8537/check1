
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/CustomerNavBar.css';
const MerchantNavBar = ({ merchantId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };

  return (
    <nav className="customer-nav-bar">
      <NavLink to={`/merchant-dashboard/${merchantId}`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Merchant Details
      </NavLink>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default MerchantNavBar;
