import React, { useState } from "react";
import emailjs from "emailjs-com";
import { X } from "lucide-react";
import "../styles/contact.css";

const Contact = ({ onClose }) => {
  const [formStatus, setFormStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      // Send email using EmailJS
      const res = await emailjs.sendForm(
        "service_cl8m13f", // Your email service ID
        "template_r2kqen4", // Your email template ID
        form,
        "MABrICLOzUvTe_f3a" // Your EmailJS user ID
      );

      if (res.text === "OK") {
        setFormStatus("Success! Your message has been sent.");
        form.reset(); // Clear the form fields
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Network error. Please try again later.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-container">
        <button className="close-button" onClick={onClose}>
          <X />
        </button>
        <div className="contact-header">
          <h1 className="contact-title">
            Yes, please provide more information.
          </h1>
          {/* <p className="contact-description">
            Yes, please provide more information.
          </p> */}
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group names">
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="form-input"
              placeholder="Your first name"
              required
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="form-input"
              placeholder="Your last name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="position"
              name="position"
              className="form-input"
              placeholder="Your position"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="company_url"
              name="company_url"
              className="form-input"
              placeholder="Your company website (URL)"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Your company email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="language"
              name="language"
              className="form-input"
              placeholder="Preferred language (Scandi, En, Ger ,Fr, Es, It)"
              required
            />
          </div>
          <button type="submit" className="form-button footer-login-button">
            Submit
          </button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;
