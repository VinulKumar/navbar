import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="logo-sec">
              <img src={Logo} alt="logo" className="Logo" />
            </div>
            <div className={`navbar-links ${isOpen ? "active" : ""}`}>
              <ul>
                <li>
                  <Link to="/" className="links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="links">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="links">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="links">
                    Booking
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="links">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
