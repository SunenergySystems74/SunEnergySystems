import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/">
          <img
            src="/Images/sun.png"
            alt="sun energy sys"
            width={200}
            height={100}
          />
        </a>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/service" className="nav-link">
            Services
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
