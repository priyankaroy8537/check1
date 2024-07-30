
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/CustomerNavBar.css';

const AdminNavBar = ( ) => {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    navigate('/');
  };

  return (
    <nav className="customer-nav-bar">
      <NavLink to={`/customer-list`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Customer List
      </NavLink>
      <NavLink to={`/merchant-list`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Merchant List
      </NavLink>
    <NavLink to={`/recent-customer-list`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Recent Customers
      </NavLink>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default AdminNavBar;
