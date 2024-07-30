// import axios from 'axios';
// import React, { useState } from 'react';

// const MerchantRegistrationForm = () => {
//   const [merchant, setMerchant] = useState({
//     merchantName: '',
//     merchantAddress: '',
//     merchantMobile: '',
//     merchantEmail: '',
//     merchantBankAcc: '',
//     merchantIFSC: '',
//     merchantBankName: '',
//     merchantLocation: '',
//     merchantCode: '',
//     merchantStatus: 'ACTIVE'
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     const mobilePattern = /^\d{10}$/;
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//     if (!mobilePattern.test(merchant.merchantMobile)) {
//       newErrors.merchantMobile = 'Mobile number must be 10 digits.';
//     }

//     if (!emailPattern.test(merchant.merchantEmail)) {
//       newErrors.merchantEmail = 'Invalid email format.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setMerchant({
//       ...merchant,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post('http://localhost:8080/merchants', merchant);
//         console.log('Merchant registered successfully:', response.data);
        
//         setMerchant({
//           merchantName: '',
//           merchantAddress: '',
//           merchantMobile: '',
//           merchantEmail: '',
//           merchantBankAcc: '',
//           merchantIFSC: '',
//           merchantBankName: '',
//           merchantLocation: '', 
//           merchantCode: '',
//           merchantStatus: 'ACTIVE'
//         });
//         setErrors({});
//       } catch (error) {
//         console.error('Error registering merchant:', error);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="merchant-registration-form">
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="merchantName"
//           value={merchant.merchantName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Address:</label>
//         <input
//           type="text"
//           name="merchantAddress"
//           value={merchant.merchantAddress}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Mobile:</label>
//         <input
//           type="text"
//           name="merchantMobile"
//           value={merchant.merchantMobile}
//           onChange={handleChange}
//           required
//         />
//         {errors.merchantMobile && <span style={{ color: 'red' }}>{errors.merchantMobile}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="merchantEmail"
//           value={merchant.merchantEmail}
//           onChange={handleChange}
//           required
//         />
//         {errors.merchantEmail && <span style={{ color: 'red' }}>{errors.merchantEmail}</span>}
//       </div>
//       <div>
//         <label>Bank Account:</label>
//         <input
//           type="text"
//           name="merchantBankAcc"
//           value={merchant.merchantBankAcc}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>IFSC:</label>
//         <input
//           type="text"
//           name="merchantIFSC"
//           value={merchant.merchantIFSC}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Bank Name:</label>
//         <input
//           type="text"
//           name="merchantBankName"
//           value={merchant.merchantBankName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Location:</label>
//         <input
//           type="text"
//           name="merchantLocation"
//           value={merchant.merchantLocation}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Code:</label>
//         <input
//           type="text"
//           name="merchantCode"
//           value={merchant.merchantCode}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Status:</label>
//         <select name="merchantStatus" value={merchant.merchantStatus} onChange={handleChange}>
//           <option value="ACTIVE">ACTIVE</option>
//           <option value="CLOSED">CLOSED</option>
//         </select>
//       </div>
//       <button type="submit">Register Merchant</button>
//     </form>
//   );
// };

// export default MerchantRegistrationForm;

import axios from 'axios';
import React, { useState } from 'react';

const MerchantRegistrationForm = () => {
  const [merchant, setMerchant] = useState({
    merchantName: '',
    merchantAddress: '',
    merchantMobile: '',
    merchantEmail: '',
    merchantBankAcc: '',
    merchantIFSC: '',
    merchantBankName: '',
    merchantLocation: '',
    merchantCode: '',
    merchantStatus: 'ACTIVE',
    merchantpassword: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const mobilePattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!mobilePattern.test(merchant.merchantMobile)) {
      newErrors.merchantMobile = 'Mobile number must be 10 digits.';
    }

    if (!emailPattern.test(merchant.merchantEmail)) {
      newErrors.merchantEmail = 'Invalid email format.';
    }

    if (!passwordPattern.test(merchant.merchantpassword)) {
      newErrors.merchantpassword = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMerchant({
      ...merchant,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/merchants', merchant);
        console.log('Merchant registered successfully:', response.data);
        // Reset the form after successful submission
        setMerchant({
          merchantName: '',
          merchantAddress: '',
          merchantMobile: '',
          merchantEmail: '',
          merchantBankAcc: '',
          merchantIFSC: '',
          merchantBankName: '',
          merchantLocation: '',
          merchantCode: '',
          merchantStatus: 'ACTIVE',
          merchantpassword: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error registering merchant:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="merchant-registration-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="merchantName"
          value={merchant.merchantName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="merchantAddress"
          value={merchant.merchantAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="merchantMobile"
          value={merchant.merchantMobile}
          onChange={handleChange}
          required
        />
        {errors.merchantMobile && <span style={{ color: 'red' }}>{errors.merchantMobile}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="merchantEmail"
          value={merchant.merchantEmail}
          onChange={handleChange}
          required
        />
        {errors.merchantEmail && <span style={{ color: 'red' }}>{errors.merchantEmail}</span>}
      </div>
      <div>
        <label>Bank Account:</label>
        <input
          type="text"
          name="merchantBankAcc"
          value={merchant.merchantBankAcc}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>IFSC:</label>
        <input
          type="text"
          name="merchantIFSC"
          value={merchant.merchantIFSC}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Bank Name:</label>
        <input
          type="text"
          name="merchantBankName"
          value={merchant.merchantBankName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="merchantLocation"
          value={merchant.merchantLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Code:</label>
        <input
          type="text"
          name="merchantCode"
          value={merchant.merchantCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="merchantStatus" value={merchant.merchantStatus} onChange={handleChange}>
          <option value="ACTIVE">ACTIVE</option>
          <option value="CLOSED">CLOSED</option>
        </select>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="merchantpassword"
          value={merchant.merchantpassword}
          onChange={handleChange}
          required
        />
        {errors.merchantPassword && <span style={{ color: 'red' }}>{errors.merchantPassword}</span>}
      </div>
      <button type="submit">Register Merchant</button>
    </form>
  );
};

export default MerchantRegistrationForm;
