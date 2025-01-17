import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <section className="about-header">
          <h1>About Us</h1>
          <p>
            We are a leading provider of sustainable solar energy solutions.
          </p>
        </section>

        <section className="about-details">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver clean, efficient, and affordable solar
              energy to homes and businesses. We aim to reduce carbon footprints
              and promote renewable energy for a sustainable future.
            </p>
          </div>
          <div className="about-content1">
            <h2>Why Choose Us</h2>
            <p>
              With over [number of years] years of experience, we offer
              top-notch solar panel installations and maintenance services
              tailored to meet the unique needs of each client. Our solutions
              are cost-effective, environmentally friendly, and designed to
              last.
            </p>
          </div>
        </section>

        <section className="about-work">
          <h2>Work we've accomplished</h2>
          {/* Add images of your solar projects */}
          <div className="work-gallery">
            <img src="/Images/Roof.jpg" alt="Solar Project 1" />
            <img src="/Images/Site1.jpg" alt="Solar Project 2" />
            <img src="/Images/siteok.jpg" alt="Solar Project 3" />
            <img src="/Images/Inverter.jpg" alt="Solar Project 4" />
            <img src="/Images/inverter2.jpg" alt="Solar Project 5" />
            <img src="/Images/solar (1).jpg" alt="Solar Project 6" />
            <img src="/Images/solar (2).jpg" alt="Solar Project 7" />
            <img src="/Images/solar (3).jpg" alt="Solar Project 8" />
            <img src="/Images/solar (4).jpg" alt="Solar Project 9" />
            <img src="/Images/solar (5).jpg" alt="Solar Project 10" />
            <img src="/Images/solar (6).jpg" alt="Solar Project 11" />
            <img src="/Images/solar (7).jpg" alt="Solar Project 12" />
            <img src="/Images/solar (8).jpg" alt="Solar Project 13" />
            <img src="/Images/solar (9).jpg" alt="Solar Project 14" />
            <img src="/Images/solar (10).jpg" alt="Solar Project 15" />
            <img src="/Images/solar (11).jpg" alt="Solar Project 16" />
            <img src="/Images/solar (12).jpg" alt="Solar Project 17" />
            <img src="/Images/solar (13).jpg" alt="Solar Project 18" />
            <img src="/Images/solar (14).jpg" alt="Solar Project 19" />
            <img src="/Images/solar (15).jpg" alt="Solar Project 20" />
            <img src="/Images/solar (16).jpg" alt="Solar Project 21" />
            <img src="/Images/solar (17).jpg" alt="Solar Project 22" />
            <img src="/Images/solar (18).jpg" alt="Solar Project 23" />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
