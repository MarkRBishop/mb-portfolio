import React from 'react';

const AboutMe = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="text-center">
        <img
          src="/Avatar.webp"
          alt="Avatar"
          className="rounded-circle"
          width="150"
          height="150"
        />
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <p className="lead">
            My name is Mark Bishop. I've been many things in my life, and now I'm proud to say I'm a programmer as well.
          </p>
          <p className="lead">
            I operated a bar for many years until one day, I decided I'd like to try something new and different. I've always been interested in coding, and when I heard about the program through the University of Texas, I jumped on the opportunity.
          </p>
          <p className="lead">
            While the program is coming to an end, I'm ready to take the next step and continue learning more about this fascinating career.
          </p>
          <div className="d-flex justify-content-around mt-4">
            <a href="https://stackoverflow.com/users/23596630/mrb" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-logo.png" alt="Stack Overflow" width="120" height="50" />
            </a>
            <a href="https://github.com/MarkRBishop" target="_blank" rel="noopener noreferrer">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://brand.linkedin.com/content/dam/brand/site/img/logo/logo-r.png" alt="LinkedIn" width="100" height="50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;