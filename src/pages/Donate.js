import React from "react";
import "./Donate.css";
import donateImage from "../assets/donate.jpg"; // make sure this image exists

function Donate() {
  return (
    <div className="donate-page">
      <h1 className="donate-title">Support Our Cause</h1>
      <p className="donate-text">
        Your contributions help us make a difference in the lives of those in need.  
        Every donation counts and brings hope to the communities we serve.
      </p>

      <div className="donate-image-container">
        <img src={donateImage} alt="Donate" />
      </div>
    </div>
  );
}

export default Donate;
