import React from "react";
import styles from "./Recuritintern.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import internshipImg from "../assets/website_banner.png";
import { FaEnvelope } from "react-icons/fa";

const InternshipPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${internshipImg})` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className="fw-bold">Internship & Recruitment Opportunities</h1>
          <p>
            Kickstart your career with <b>Lazeno Consultancy Services</b> – gain real-world experience,
            explore new domains, and step into your professional journey.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container py-5">
        <div className={styles.cardsWrapper}>
          
          {/* Internship Card */}
          <div className={styles.infoCard}>
            <h3 className="fw-bold mb-3">Internship Opportunities</h3>
             <br />
            <p className="text-muted mb-4"> Our internships are designed to give you real-world experience, hands-on learning, and the opportunity to work with industry experts. Whether you're into development, AI, or cloud, we have the right program for you. </p>
             <br />
            <p className="text-muted mb-3">
              Internships for <strong>1–2 months</strong> in every domain.
              <br />
      
              For more details, please send us an email.
            </p>
            <a
              href="mailto:lazenocons01@gmail.com?subject=Internship Application"
              className={styles.applyBtn}
            >
              <FaEnvelope className="me-2" />
              Apply for Internship
            </a>
          </div>

          {/* Recruitment Card */}
          <div className={styles.infoCard}>
            <h3 className="fw-bold mb-3">Recruitment Opportunities</h3>
             <br />
            <p className="text-muted mb-4"> Looking for a full-time career? Join our recruitment programs to explore roles in development, marketing, business analysis, and more. Grow your career with trusted companies and a professional environment. </p>
             <br />
            <p className="text-muted mb-3">
              Recruitment requires <strong>minimum 6 months experience</strong>.
              <br />
              For more details, please send us an email.
            </p>
            <a
              href="mailto:lazenocons01@gmail.com?subject=Recruitment Application"
              className={styles.applyBtn}
            >
              <FaEnvelope className="me-2" />
              Apply for Recruitment
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipPage;


