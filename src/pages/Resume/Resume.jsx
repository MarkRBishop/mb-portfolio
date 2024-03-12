import React from 'react';

const ResumePage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 resume-container">
          <h2 className="text-center mb-4">My Resume</h2>
          <p>
            Here, you can provide information about your skills, experience, and education.
          </p>
          <a href="/path/to/your/resume.pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
