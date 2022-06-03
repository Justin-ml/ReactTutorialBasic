import React from "react";
import emailIcon from "../images/email-icon.png";
import linkedInIcon from "../images/linkedin-icon.png";

export default function Button() {
  return (
    <div>
      <button className="btn with-icon">
        <img src={emailIcon} alt="email" className="email" />
        Email
      </button>
      <button className="btn with-icon primary">
        <img src={linkedInIcon} alt="linkedin" className="linkedin" />
        LinkedIn
      </button>
      <div>
        <img className="test"></img>
      </div>
    </div>
  );
}
