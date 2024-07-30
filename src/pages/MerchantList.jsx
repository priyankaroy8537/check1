import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavBar from "../pages/AdminNavBar";

const MerchantList = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    const fetchMerchants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/merchants');
        setMerchants(response.data);
      } catch (error) {
        console.error('Error fetching merchants:', error);
      }
    };

    fetchMerchants();
  }, []);

  return (
    <div className="recent-customer-container">
    <AdminNavBar  />
    <h1 className="recent-customer-title">Merchant  List</h1>
    <table className="recent-customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Bank Acc</th>
            <th>IFSC</th>
            <th>Bank Name</th>
            <th>Location</th>
            <th>Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant.merchantID}>
              <td>{merchant.merchantName}</td>
              <td>{merchant.merchantAddress}</td>
              <td>{merchant.merchantMobile}</td>
              <td>{merchant.merchantEmail}</td>
              <td>{merchant.merchantBankAcc}</td>
              <td>{merchant.merchantIFSC}</td>
              <td>{merchant.merchantBankName}</td>
              <td>{merchant.merchantLocation}</td>
              <td>{merchant.merchantCode}</td>
              <td>{merchant.merchantStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantList;
