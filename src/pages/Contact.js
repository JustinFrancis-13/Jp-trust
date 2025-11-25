import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import bgImage from "../assets/contactbg.jpg"; // 👈 make sure this image exists in src/assets/

function Contact() {
  return (
    <div className="contact-page">
      {/* 🔹 Fullscreen Hero Section */}
      <div
        className="contact-hero"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="contact-overlay">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subheading">We would love to connect with you</p>

          {/* 🔹 Social Media Icons */}
          <div className="contact-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/jptrust_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/917337591343"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Contact Info Section */}
      <div className="contact-info-section">
        <h2>Get in Touch</h2>
        <div className="contact-info-row">
          <div className="contact-box">
            <h3>Email</h3>
            <p>josephpaul2712@gmail.com</p>
          </div>
          <div className="contact-box">
            <h3>Phone</h3>
            <p>+91 73375 91343</p>
          </div>
          <div className="contact-box">
            <h3>Address</h3>
            <p>
              Dammaiguda,
              <br />
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
