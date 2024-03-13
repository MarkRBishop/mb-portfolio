import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validationMessage, setValidationMessage] = useState('');

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return true; // For simplicity, assume all emails are valid
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dynamic validation checks
    let message = '';

    if (!formData.name.trim()) {
      message = 'Please enter your name.';
    } else if (!formData.email.trim() || !isValidEmail(formData.email)) {
      message = 'Please enter a valid email address.';
    } else if (!formData.message.trim()) {
      message = 'Please enter a message.';
    }

    setValidationMessage(message);

    // Check for required fields before submission
    if (message) {
      return;
    }

    // Perform any additional actions on form submission if needed
    // ...

    // Display thank you message
    setValidationMessage('Thank you for your message.');

    // Clear form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      <div className="w-50">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea className="form-control" id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <div className="text-danger mt-3">{validationMessage}</div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
