

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CustomerDashboard from './pages/CustomerDashboard';
import CustomerLoginForm from './pages/CustomerLoginForm';
import MainLayout from './pages/MainLayout';
//import CustomerNavBar from './pages/CustomerNavBar';
import TransactionDetails from './pages/TransactionDetails';
import TransactionForm from './pages/TransactionForm';
// import MerchantLoginForm from './pages/MerchantLoginForm';
 import Admin from './pages/Admin';
import CustomerList from './pages/CustomerList';
import MerchantDashboard from './pages/MerchantDashboard';
import MerchantList from './pages/MerchantList';
import RecentCustomer from './pages/RecentCustomer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<CustomerLoginForm />} />
        <Route path="/merchant-dashboard/:merchantId" element={<MerchantDashboard />} />
        <Route path="/customer-list" element={<CustomerList />} />
        <Route path="/recent-customer-list" element={<RecentCustomer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/merchant-list" element={<MerchantList/>} />
        {/* <Route path="/merchant-dashboard/:merchantId" element={<MerchantDashboard />} /> */}
        <Route path="/customer-dashboard/:customerId/*" element={<CustomerDashboard />}>
          <Route path="transaction-form" element={<TransactionForm />} />
          <Route path="transactions/:transactionType" element={<TransactionDetails />} />
          {/* <Route path="/products" element={<ProductCarousel />} /> */}
           {/* <Route path="/merchant-login" element={<MerchantLoginForm />} /> */}
          
          
        </Route>
      
      </Routes>
    </Router>
  );
};

export default App;
