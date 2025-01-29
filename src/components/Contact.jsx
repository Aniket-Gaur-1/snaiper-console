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
        "service_cl8m13f", // The ID of your email service
        "template_r2kqen4", // The ID of the email template
        form,
        "MABrICLOzUvTe_f3a" // Your EmailJS user ID
      );

      if (res.status === 200) {
        setFormStatus("Success! Your message has been sent.");
        form.reset(); // Clear the form fields
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Network error. Please try again later.");
      console.error("Error sending email: ", error);
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-container">
        <button className="close-button" onClick={onClose}>
          <X />
        </button>
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            Have a question or want to get in touch? Fill out the form below and
            we will get back to you as soon as possible.
          </p>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button footer-login-button">
            Submit
          </button>
        </form>

        {/* Display status message */}
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;
