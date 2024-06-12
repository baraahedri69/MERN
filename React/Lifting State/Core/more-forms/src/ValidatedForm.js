import React, { useState } from 'react';
import './App.css';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Validate input fields
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.length < 2) {
          error = `${name === 'firstName' ? 'First Name' : 'Last Name'} must be at least 2 characters`;
        }
        break;
      case 'email':
        if (value.length < 5) {
          error = 'Email must be at least 5 characters';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords must match';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  return (
    <div className="ValidatedForm">
      <h1>Form with Validation</h1>
      <form>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
      </form>
      <h2>Form Data</h2>
      <div>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
      </div>
    </div>
  );
}

export default ValidatedForm;