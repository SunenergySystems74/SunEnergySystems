import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="services-container">
      <h1>Services we've provide</h1>

      <section className="service-list">
        <div className="service-item">
          <h2>Solar Panel Installation</h2>
          <p>
            We offer professional solar panel installations that maximize
            efficiency and energy output for both residential and commercial
            properties.
          </p>
        </div>

        <div className="service-item1">
          <h2>Maintenance & Repair</h2>
          <p>
            Our maintenance services ensure your solar panels operate at peak
            performance. We also offer repairs and system check-ups.
          </p>
        </div>

        <div className="service-item2">
          <h2>Solar Consulting</h2>
          <p>
            Not sure how solar energy works for you? Our expert consultants will
            guide you through every step, from design to installation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Service;
