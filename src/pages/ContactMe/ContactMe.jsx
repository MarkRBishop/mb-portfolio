import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validationMessages, setValidationMessages] = useState({ name: '', email: '', message: '' });

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let message = '';

    if (!value.trim()) {
      message = `Please enter your ${name}.`;
    }

    setValidationMessages((prevMessages) => ({ ...prevMessages, [name]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dynamic validation checks
    let messages = {
      name: !formData.name.trim() ? 'Please enter your name.' : '',
      email: !formData.email.trim() || !isValidEmail(formData.email) ? 'Please enter a valid email address.' : '',
      message: !formData.message.trim() ? 'Please enter a message.' : '',
    };

    setValidationMessages(messages);

    // Check for required fields before submission
    if (Object.values(messages).some((message) => message !== '')) {
      return;
    }

    // Perform any additional actions on form submission if needed
    // ...

    // Display thank you message
    setValidationMessages({ name: '', email: '', message: 'Thank you for your message.' });

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
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <div className="text-danger">{validationMessages.name}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <div className="text-danger">{validationMessages.email}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <div className="text-danger mt-3">{validationMessages.message}</div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;