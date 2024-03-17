import React from 'react';
import MyResumePDF from '../assets/MRresume.pdf';

const ResumePage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 resume-container">
          <h2 className="text-center mb-4">My Resume</h2>
          <p className="text-center">Real resume coming soon...</p>
          <div className="mb-4">
            <iframe src="MRresume.pdf" title="Resume" width="100%" height="800px"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
