
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionService from '../Services/TransactionService';

const TransactionDetails = () => {
  const { customerId, transactionType } = useParams(); 
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchTransactionDetails = async () => {
      try {
        
        const response = await TransactionService.getTransactionDetails(customerId, transactionType);
        console.log("18", response.data);
        setTransaction(response.data);
      } catch (err) {
        setError('Failed to fetch transaction details');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionDetails();
  }, [customerId, transactionType]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Transaction Details</h2>
      {transaction ? (
        <div>
          <p><strong>Transaction ID:</strong> {transaction.transactionID}</p>
          <p><strong>Transaction Type:</strong> {transaction.transactionType}</p>
          {/* <p><strong>Credit Card Number:</strong> {transaction.creditCard.creditcardNumber}</p>
          <p><strong>Merchant ID:</strong> {transaction.transactionID}</p> */}
          <p><strong>Transaction Amount:</strong> {transaction.transactionAmount}</p>
          <p><strong>Currency:</strong> {transaction.currency}</p>
          <p><strong>Auth Code:</strong> {transaction.authCode}</p>
        </div>
      ) : (
        <p>No transaction details available</p>
      )}
    </div>
  );
};

export default TransactionDetails;
