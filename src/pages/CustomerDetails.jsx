
import axios from 'axios';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customerImage from '../assets/customerdetail.png';
import '../style/CustomerDetails.css';


const CustomerDetails = (props) => {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  //const id=Number(customerId);
  console.log("9",props.customerId);
//   const id = parseInt(customerId, 10);
  //console.log(id);
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/customers/${customerId}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomer();
  }, []);

  const handleDownloadPDF= () => {
    const doc =new jsPDF();
    doc.text("Customer Details " , 20 ,20);
    if(customer){
      doc.text(`Name : ${customer.name}`,20,30);
      doc.text(`Date of Birth : ${customer.dob}`,20 ,40);
      doc.text(`Address : ${customer.address}` ,20, 50);
      doc.text(`Mobile : ${customer.mobile}`,20,60);
      doc.text(` PAN: ${customer.pan}`,20,70);
      doc.text(`Email : ${customer.email}`,20,80);
    }
    doc.save('customer-details.pdf');
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="customer-details">
    <div className="customer-details-container">
    <div className="customer-image-container">
      <img src={customerImage} alt="Customer" className="customer-image" />
    </div>
    <div className="customer-details">
      <h1>Customer Details</h1>
      <p>Name: {customer.name}</p>
      <p>Date of Birth: {customer.dob}</p>
      <p>Address: {customer.address}</p>
      <p>Mobile: {customer.mobile}</p>
      <p>PAN: {customer.pan}</p>
      <p>Email: {customer.email}</p>
      <button className="download-pdf-button" onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default CustomerDetails;
