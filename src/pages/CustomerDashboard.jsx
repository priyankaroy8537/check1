
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import CustomerNavBar from '../pages/CustomerNavBar';
import Footer from '../pages/Footer';
import IssueCreditCard from '../pages/IssueCreditCard';
import TransactionDetails from '../pages/TransactionDetails';
import TransactionForm from '../pages/TransactionForm';
import CustomerDetails from './CustomerDetails';
import ProductCarousel from './ProductType';

const CustomerDashboard = () => {
  const { customerId } = useParams();

  return (
    <div>
      <CustomerNavBar customerId={customerId} />
      <Routes>
        <Route path="customer-details" element={<CustomerDetails customerId={customerId}/>} />
        {/* <Route path="transactions" element={<Transactions customerId={customerId}/>} />
       */}
        <Route path="transaction-form" element={<TransactionForm />} />
        <Route path="transactions/:transactionType" element={<TransactionDetails />} />
        <Route path="issueCreditCard" element={<IssueCreditCard customerId={customerId} />} />
        <Route path="products" element={<ProductCarousel customerId={customerId} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;



