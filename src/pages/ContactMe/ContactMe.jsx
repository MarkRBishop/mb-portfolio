import React from 'react';

const ContactMe = () => {
  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      <div className="w-50">
        <h2>Contact Me</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea className="form-control" id="message" name="message" rows="6"></textarea>
          </div>
  
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe