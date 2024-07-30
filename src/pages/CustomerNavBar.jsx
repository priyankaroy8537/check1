
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/CustomerNavBar.css';
const CustomerNavBar = ({ customerId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };

  return (
    <nav className="customer-nav-bar">
       <NavLink to={`/customer-dashboard/${customerId}/products`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
       Products
      </NavLink>
      <NavLink to={`/customer-dashboard/${customerId}/customer-details`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Customer Details
      </NavLink>
      <NavLink to={`/customer-dashboard/${customerId}/issueCreditCard`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        issueCreditCard
      </NavLink>
      <NavLink to={`/customer-dashboard/${customerId}/transaction-form`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Transaction Form
      </NavLink>
    
     
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default CustomerNavBar;
