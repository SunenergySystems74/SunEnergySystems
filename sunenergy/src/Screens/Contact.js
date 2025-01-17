import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sunenergysystem-lbihyevv5-sunenergysystems74s-projects.vercel.app/send-email",
        formData
      )
      .then((response) => {
        setResponseMessage("Message sent successfully!");
      })
      .catch((error) => {
        setResponseMessage("Failed to send the message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help with your solar energy needs.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>{responseMessage}</p>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>
            MIDC Hingna road,Near Electronic Zone Square, Nagpur, Maharashtra
            440016
          </p>
          <p>Email: sunenergysystems74@gmail.com</p>
          <p>Phone: +91 9673188352</p>

          {/* Location Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.07008419544!2d78.97771217471656!3d21.109771884992224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49538ae8a5a7d%3A0xe5be2b89cf294ca3!2sSun%20Energy%20systems!5e0!3m2!1sen!2sin!4v1727105099768!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
