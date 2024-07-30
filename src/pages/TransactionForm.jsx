import React, { useState } from 'react';
import transactionImage from '../assets/transactionform.png';
import TransactionService from '../Services/TransactionService';
import '../style/TransactionForm.css';

const TransactionForm = () => {
  const [transactionType, setTransactionType] = useState('');
  const [creditcardNumber, setCreditcardNumber] = useState('');
  const [merchantID, setMerchantID] = useState('');
  const [currency, setCurrency] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [serverAuthCode, setServerAuthCode] = useState('');
  const [enteredAuthCode, setEnteredAuthCode] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [error, setError] = useState('');
  const[availableBalance,setAvailableBalance]=useState(null);
 
//  useEffect(() => {
//   if(creditcardNumber){
//     TransactionService.getAvailableBalance(creditcardNumber)
//     .then(response => {
//       setAvailableBalance(response.data.availableBalance);
//     })
//     .catsh(error => {
//       console.error('eeror', error);
//       setError('error');
//       alert('error');
//     });
//   }
//  },[creditcardNumber]);
  const handleSubmit = (e) => {
    e.preventDefault();

    TransactionService.getCreditCardDetails(creditcardNumber)
        .then((response) => {
          const balance =response.data.creditLimit;
          setAvailableBalance(balance);
        
    if(transactionType ==="2" && parseFloat(transactionAmount) > parseFloat(balance)){
      alert('Insufficient Balance');
      return;
    }else{
    const authCode = "123";
    TransactionService.postTransaction(parseInt(transactionType), creditcardNumber, merchantID, currency, transactionAmount,authCode)
      .then((response) => {
        console.log('Transaction posted:', response.data);
        setServerAuthCode(response.data.authCode); 
        setTransactionDetails(response.data); 
        setSubmitted(true); 
      })
      .catch((error) => {
        console.error('Error posting transaction:', error);
        setError('Error posting transaction');
      });
  }
        })
        .catch((error) => {
          console.error('Error fetching credit card details ' ,error);
          setError('Error fetching credit card details');
        });
      };
  const handleAuthCodeSubmit = (e) => {
    e.preventDefault();
    if (enteredAuthCode === serverAuthCode) {
      setError(''); 
    } else {
      setError('OTP did not match');
    }
  };

  if (transactionDetails && enteredAuthCode === serverAuthCode) {
    return (
      <div className="transaction-form-container">
        <h2>Transaction Details</h2>
        <p><strong>Transaction ID:</strong> {transactionDetails.transactionID}</p>
        <p><strong>Transaction Type:</strong> {transactionDetails.transactionType}</p>
        <p><strong>Credit Card Number:</strong> {transactionDetails.creditcard.creditcardNumber}</p>
        <p><strong>Merchant Name:</strong> {transactionDetails.merchant.merchantName}</p>
        <p><strong>Transaction Amount:</strong> {transactionDetails.transactionAmount}</p>
        <p><strong>Currency:</strong> {transactionDetails.currency}</p>
        <p><strong>Available Balance :</strong>{transactionDetails.creditcard.creditLimit}</p>
      </div>
    );
  }

  return (
    <div className="transaction-form-wrapper">
      <div className="transaction-image-container">
        <img src={transactionImage} alt="Transaction" className="transaction-image" />
        </div>
        <div className="transaction-form-container" >
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Transaction Type:</label>
            <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} required>
              <option value="">Select Transaction Type</option>
              <option value="1">Balance Enquiry</option>
              <option value="2">Purchases</option>
              <option value="3">Payments</option>
             {/* <option value="4">Cancellation</option> */}
            </select>
          </div>
          <div>
            <label>Credit Card Number:</label>
            <input type="text" value={creditcardNumber} onChange={(e) => setCreditcardNumber(e.target.value)} required />
          </div>
          <div>
            <label>Merchant ID:</label>
            <input type="number" value={merchantID} onChange={(e) => setMerchantID(e.target.value)} required />
          </div>
          <div>
            <label>Currency:</label>
            <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} required />
          </div>
          <div>
            <label>Transaction Amount:</label>
            <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} required />
          </div>
          <button type="submit">Submit Transaction</button>
        </form>
      ) : (
        <form onSubmit={handleAuthCodeSubmit}>
          <div>
            <label>Enter OTP :</label>
            <input type="text" value={enteredAuthCode} onChange={(e) => setEnteredAuthCode(e.target.value)} required />
          </div>
          <button type="submit">Verify OTP</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
     </div>
    
  );
};

export default TransactionForm;
