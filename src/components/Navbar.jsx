import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo1.svg"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNavLinkClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsNavOpen(false);
    setIsServicesOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <header className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className={`navbar-brand m-0 ${styles.brand}`} onClick={() => handleNavLinkClick("/")}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <span className={styles.brandText}>Lazeno Consultancy Services</span>
        </span>
        <button className="navbar-toggler border-0" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className={`collapse navbar-collapse px-3 ${isNavOpen ? "show" : ""}`}>
        <ul className={`navbar-nav ms-auto mt-2 mt-lg-0 ${styles.navList}`}>
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
          ].map((item, index) => (
            <li className="nav-item" key={index}>
              <span className={`nav-link fw-semibold ${styles.navLink}`} onClick={() => handleNavLinkClick(item.path)}>
                {item.label}
              </span>
            </li>
          ))}

          <li className="nav-item dropdown position-relative">
            <span
              className={`nav-link fw-semibold d-flex align-items-center ${styles.navLink}`}
              onClick={toggleServices}
              style={{ cursor: "pointer" }}
            >
              Services <span className="ms-1">▾</span>
            </span>
            {isServicesOpen && (
              <ul className={`dropdown-menu show ${styles.dropdownMenu}`}>
                {[
                  { label: "Content Creation", path: "/contentcreation" },
                  { label: "Poster Designing", path: "/poster" },
                  { label: "SEO Optimization", path: "/seo" },
                  { label: "Video Editing", path: "/video-editing" },
                  { label: "Social Media Management", path: "/socialmedia" },
                  { label: "Email Marketing", path: "/email-marketing" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <span className={`dropdown-item ${styles.dropdownItem}`} onClick={() => handleNavLinkClick(item.path)}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <span className={`nav-link fw-semibold ${styles.navLink}`} onClick={() => handleNavLinkClick("/contact")}>
              Contact Us
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
