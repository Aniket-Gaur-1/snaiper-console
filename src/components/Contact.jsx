import React from "react";
import "../styles/contact.css";

const Contact = ({ toggleContactForm }) => {
  return (
    <div className="contact-overlay">
      <div className="contact-container">
        <button className="close-button" onClick={toggleContactForm}>
          ✖
        </button>
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            Have a question or want to get in touch? Fill out the form below and
            we will get back to you as soon as possible.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" id="name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea id="message" className="form-input" rows="5"></textarea>
          </div>
          <button type="submit" className="form-button footer-login-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
