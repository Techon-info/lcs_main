import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faThreads,faLinkedin,faFacebookF,faInstagram,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-auto py-5`}>
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className={styles.footerTitle}>Lazeno Consultancy Services</h5>
            <p className={styles.footerText}>
              Empowering your digital presence with innovation and strategy.
            </p>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className={styles.footerSubtitle}>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className={styles.footerSubtitle}>Contact Info</h6>
            <p><FaMapMarkerAlt className={styles.footerIcon} /> 151 A, SIFA TOWER, Karupparayan Kovil, Kurichi, Podanur, Coimbatore.</p>
            <p><FaPhoneAlt className={styles.footerIcon} /> +91 7604889478</p>
            <p>
              <a href="mailto:lazenocons01@gmail.com" style={{ color: "white" }}>
                <FaEnvelope className={styles.footerIcon} /> lazenocons01@gmail.com
              </a>
            </p>
            <p><FaClock className={styles.footerIcon} /> All Days: 6 AM - 10 PM</p>
          </div>

          <div className="col-md-4">
            <h6 className={styles.footerSubtitle}>Services Quick Links</h6>
            <ul className={styles.footerLinks}>
              <li><Link to="/contentcreation">Content Creation</Link></li>
              <li><Link to="/poster">Poster Designing</Link></li>
              <li><Link to="/socialmedia">Social Media Management</Link></li>
              <li><Link to="/seo">SEO Optimization</Link></li>
              <li><Link to="/video-editing">Video Editing</Link></li>
              <li><Link to="/email-marketing">Email Marketing</Link></li>
            </ul>
            <p className="mb-2">Follow us for latest updates</p>
            <div className={styles.socialIcons}>
             <a href="https://wa.me/917604889478" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.facebook.com/LazenoConsultancy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
               <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/_lcs_official?igsh=emkxdjFudTR4ODh6" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://x.com/lcs_official_X?t=YJHZ8NS7XHgiCz8aagoBGA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://www.threads.net/@_lcs_official" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <FontAwesomeIcon icon={faThreads} />
              </a>
              <a href="https://www.linkedin.com/in/lazeno-consultancy-and-service-lcs-15a634361/" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0 small">&copy; {new Date().getFullYear()} Lazeno Consultancy Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
