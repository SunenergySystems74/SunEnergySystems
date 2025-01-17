import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    consumer: "",
    email: "", // Added email field
  });

  const [responseMessage, setResponseMessage] = useState("");
  const cardRefs = useRef([]);
  const formRef = useRef(null);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // EmailJS integration
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        window.emailjs.init("3BEXx1qpPfmRke-P3"); // Replace with your EmailJS public key
      } catch (error) {
        console.error("Failed to initialize EmailJS:", error);
        setResponseMessage("Failed to initialize Email service.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    if (formRef.current) {
      window.emailjs
        .sendForm("service_pj234pq", "template_msrtu9g", formRef.current, "3BEXx1qpPfmRke-P3")
        .then(() => {
          setResponseMessage("Message sent successfully via EmailJS!");
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          setResponseMessage("Failed to send the message via EmailJS.");
        });
    }

    // Optionally send data to your server
    axios
      .post("http://localhost:5000/send-client", formData)
      .then(() => {
        setResponseMessage("Data sent successfully to the server!");
      })
      .catch(() => {
        setResponseMessage("Failed to send data to the server.");
      });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.8 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="overlay folder-animation">
          <h1 className="slide-in-text">
            Sun Energy Systems: <br />
            Harnessing the Power of the Sun
          </h1>
          <p className="typewriter-text">
            Embrace the future of energy with Sun Energy Systems. We provide innovative solar solutions for a sustainable tomorrow.
          </p>
        </div>
      </div>
      <section>
        <div className="container2">
          <h2>Responsive 3D Visual Experience</h2>
          <div className="content">
            <div className="card hidden" ref={(el) => (cardRefs.current[0] = el)}>
              <img src="/Images/3dimg2.jpg" alt="Interactive 3D Model" />
              <h3>Commercial 3D Model</h3>
              <p>
                Experience your solar project before it's built. Explore our interactive 3D models, view different panel configurations, and get a realistic sense of your system's impact.
              </p>
            </div>
            <div className="card hidden" ref={(el) => (cardRefs.current[1] = el)}>
              <img src="/Images/3dimg.jpg" alt="Visualization Tools" />
              <h3>Residential 3D Model</h3>
              <p>
                Our cutting-edge visualization tools bring your solar energy goals to life. See your system's energy production, potential savings, and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Client Information Section */}
      <section>
        <div className="client-info">
          <div className="info-content">
            <h2>Why Choose Us?</h2>
            <p>
              At Sun Energy Systems, we provide tailored solar solutions that fit your energy needs. Our team of experts is dedicated to delivering the highest quality service and support.
            </p>
            <h3>Benefits of Solar Energy:</h3>
            <ul>
              <li>Reduce your electricity bills</li>
              <li>Decrease your carbon footprint</li>
              <li>Increase your property value</li>
              <li>Enjoy energy independence</li>
            </ul>
          </div>
          <div className="client-form">
            <h2>Interested in Solar Solutions? Get in Touch!</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Electricity Consumer Number</label>
                <input
                  type="number"
                  name="consumer"
                  value={formData.consumer}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <p>{responseMessage}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
