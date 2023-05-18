import React from "react";
import "./Profile.css";
const fp = require("../../img/fp2.jpg");
const resume = require("../../Documents/nendy-portfolio.pdf");

function MyProfile() {
  return (
    <div className="profile">
      <div className="profile-text">
        <h1>Hi There,
        </h1>
        <h1>I am Nendy Azhad</h1>
        <h2>Web Developer.</h2>
        <p className="profile-text-about">
        Skilled Javascript on MERN fullstack Web Developer. Ability to learn and implement new technologies quickly. My skills include Javascript, NodeJs, ExpressJs, ReactJs, MongoDB, Mysql, Postgresql. 
        </p>
        <div className="profile-social-links">
          <a
            href="https://github.com/nurazhad"
            target="_blank"
            rel="noopener noreferrer me"
            title="Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nendy/"
            target="_blank"
            rel="noopener noreferrer me"
            title="Linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
        <a href="mailto:azhadnurahmann@gmail.com">
          <button>Contact Me</button>
        </a>
      </div>
      <div className="profile-img">
        <img src={fp} alt="pfp"></img>
        <div className="img-shade"></div>
      </div>
    </div>
  );
}

export default MyProfile;
