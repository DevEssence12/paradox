import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    query: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper functions for validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobile = (mobile) => {
    const re = /^[6-9]\d{9}$/; // Validates 10-digit Indian mobile numbers starting with 6-9
    return re.test(mobile);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    // Clear error for this field on change
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Reset errors
    setErrors({});
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
      isValid = false;
    }
    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    // Validate mobile
    if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      isValid = false;
    }
    // Validate query
    if (formData.query.trim().length < 10) {
      newErrors.query = 'Please enter a detailed query (minimum 10 characters)';
      isValid = false;
    }
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Show spinner and disable button
    setIsSubmitting(true);

    // Create submission data object
    const submissionData = {
      Name: formData.username,
      Email: formData.email,
      Mobile: formData.mobile,
      Query: formData.query
    };

    try {
      const response = await fetch("https://formspree.io/f/mjkgpgdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        alert("Submitted. We will review your request and revert you back via email within 24 hours.");
        // Redirecting to final page (if desired)
        window.location.href = 'https://paradoxinnovator.com/';
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles['form-section']}>
      <h1 className={styles.title}>Have a query? Drop in your questions</h1>
      <p className={styles.subtitle}>We would love to answer them!</p>
      <form id="contactForm" onSubmit={handleSubmit}>
        {/* Row container for Name, Mobile, and Email */}
        <div className={styles['input-group-row']}>
          <div className={styles['input-group']}>
            <label htmlFor="username">Your Name</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              required
            />
            {errors.username && <span className={styles.error} id="usernameError">{errors.username}</span>}
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="tel"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your Mobile No."
              required
            />
            {errors.mobile && <span className={styles.error} id="mobileError">{errors.mobile}</span>}
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
            {errors.email && <span className={styles.error} id="emailError">{errors.email}</span>}
          </div>
        </div>
        {/* Query text area */}
        <div className={styles['input-group']}>
          <label htmlFor="query">Questions</label>
          <textarea
            id="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Type your query here"
            required
          />
          {errors.query && <span className={styles.error} id="queryError">{errors.query}</span>}
        </div>
        <br></br>
        <button id="submitBtn" type="submit" className={styles.button} disabled={isSubmitting}>
          <span id="btnText">{isSubmitting ? '' : 'Submit'}</span>
          {isSubmitting && <span id="spinner" className={styles.spinner}></span>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
