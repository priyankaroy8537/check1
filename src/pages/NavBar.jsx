import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/CustomerLoginForm" activeClassName="active-link">Customer Login</NavLink>
      <NavLink to="/register-customer" activeClassName="active-link">Customer Registration</NavLink>
      <NavLink to="/MerchantLoginForm" activeClassName="active-link">Merchant Login</NavLink>
      <NavLink to="/register-merchant" activeClassName="active-link">Merchant Registration</NavLink>
    </nav>
  );
};

export default NavBar;
