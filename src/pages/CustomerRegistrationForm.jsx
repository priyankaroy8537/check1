
import axios from 'axios';
import React, { useState } from 'react';

const CustomerRegistrationForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    dob: '',
    address: '',
    mobile: '',
    pan: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const mobilePattern = /^\d{10}$/;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!mobilePattern.test(customer.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits.';
    }

    if (!panPattern.test(customer.pan)) {
      newErrors.pan = 'PAN must be in the format of 5 capital letters, 4 numbers, and 1 capital letter.';
    }

    if (!emailPattern.test(customer.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!passwordPattern.test(customer.password)) {
      newErrors.password = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/api/customers', customer);
        console.log('Customer registered successfully:', response.data);
        // Reset the form after successful submission
        setCustomer({
          name: '',
          dob: '',
          address: '',
          mobile: '',
          pan: '',
          email: '',
          password: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error registering customer:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={customer.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={customer.mobile}
          onChange={handleChange}
          required
        />
        {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}
      </div>
      <div>
        <label>PAN:</label>
        <input
          type="text"
          name="pan"
          value={customer.pan}
          onChange={handleChange}
          required
        />
        {errors.pan && <span style={{ color: 'red' }}>{errors.pan}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={customer.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <button type="submit">Register Customer</button>
    </form>
  );
};

export default CustomerRegistrationForm;
