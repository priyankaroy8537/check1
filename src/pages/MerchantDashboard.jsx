
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import merchantImage from '../assets/merchant.png';
import Footer from '../pages/Footer';
import '../style/MerchantDashboard.css';
import MerchantNavBar from './MerchantNavBar';


const MerchantDashboard = () => {
  const { merchantId } = useParams();
  const [merchant, setMerchant] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMerchantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/merchants/${merchantId}`);
        setMerchant(response.data);
      } catch (error) {
        console.error('Error fetching merchant details:', error);
        setError('Failed to fetch merchant details');
      }
    };

    fetchMerchantDetails();
  }, [merchantId]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!merchant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="merchant-dashboard">
    <MerchantNavBar merchantId={merchantId} />
    <div className="dashboard-content">
    <div className="merchant-details">
      <h2>Merchant Details</h2>
      <p><strong>Merchant ID:</strong> {merchant.merchantID}</p>
      <p><strong>Name:</strong> {merchant.merchantName}</p>
      <p><strong>Address:</strong> {merchant.merchantAddress}</p>
      <p><strong>Mobile:</strong> {merchant.merchantMobile}</p>
      <p><strong>Email:</strong> {merchant.merchantEmail}</p>
      <p><strong>Bank Account:</strong> {merchant.merchantBankAcc}</p>
      <p><strong>IFSC:</strong> {merchant.merchantIFSC}</p>
      <p><strong>Bank Name:</strong> {merchant.merchantBankName}</p>
      <p><strong>Location:</strong> {merchant.merchantLocation}</p>
      <p><strong>Code:</strong> {merchant.merchantCode}</p>
      <p><strong>Status:</strong> {merchant.merchantStatus}</p>
    </div>
    <div className="merchant-image">
          <img src={merchantImage} alt="Merchant" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MerchantDashboard;
