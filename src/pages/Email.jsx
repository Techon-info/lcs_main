import React from 'react';
import styles from './Email.module.css';
import { useNavigate } from 'react-router-dom';
import { FaBullhorn, FaChartLine, FaRobot, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import email from '../assets/email.jpeg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Email = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  const benefits = [
    {
      icon: <FaBullhorn size={32} color="#1d72b8" />,
      title: "Direct Communication",
      desc: "Engage your audience right in their inbox with targeted messages.",
    },
    {
      icon: <FaChartLine size={32} color="#28a745" />,
      title: "High ROI",
      desc: "Email marketing delivers the highest return on investment among all channels.",
    },
    {
      icon: <FaRobot size={32} color="#ffc107" />,
      title: "Automation & Personalization",
      desc: "Deliver personalized journeys without lifting a finger.",
    },
    {
      icon: <FaSearch size={32} color="#e83e8c" />,
      title: "Real-time Tracking",
      desc: "Track opens, clicks, and engagement instantly.",
    },
  ];

  return (
    <>
    <Navbar/>
      <div className={styles["email-marketing-container"]}>
        <section className={styles["email-hero"]}>
          <div className={styles["email-hero-content"]}>
            <div className={styles["email-hero-text"]}>
              <h1 className={`${styles["fw-bold"]} ${styles["display-5"]} ${styles["text-center"]} ${styles["text-md-start"]}`}>
                Email Marketing Services
              </h1>
              <p>
                Engage. Convert. Grow. Elevate your brand with data-driven email strategies.  
                From personalized campaigns and automated workflows to compelling copy and responsive designs, we craft emails that your audience actually wants to open.  
                Our approach focuses on delivering the right message at the right time — boosting open rates, click-throughs, and long-term customer loyalty.
              </p>
              <button className={styles["email-btn"]} onClick={handleBookCall}>Contact Us</button>
            </div>
            <div className={styles["email-hero-image"]}>
              <img src={email} alt="Email Marketing Illustration" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles["email-services"]}>
          <h2>Our Email Marketing Solutions</h2>
          <div className={styles["service-grid"]}>
            <div className={styles["service-card"]}>
              <h3>Custom Campaign Design</h3>
              <p>Visually rich, personalized emails that reflect your brand voice and increase open rates.</p>
            </div>
            <div className={styles["service-card"]}>
              <h3>Automation & Funnels</h3>
              <p>Convert leads into customers with automated sequences that do the work for you.</p>
            </div>
            <div className={styles["service-card"]}>
              <h3>Segmentation & Targeting</h3>
              <p>Deliver relevant content to the right audience using smart segmentation.</p>
            </div>
            <div className={styles["service-card"]}>
              <h3>Analytics & Reporting</h3>
              <p>Track performance with real-time dashboards and optimize for better results.</p>
            </div>
          </div>
        </section>

        {/* Why Email Marketing */}
        <section className={styles["email-benefits"]}>
          <h2>Why Email Marketing?</h2>
          <div className={styles["benefits-grid"]}>
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className={styles["benefit-card"]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles["icon"]}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Tools */}
        <section className={styles["email-tools"]}>
          <h2>Tools We Use</h2>
          <div className={styles["tools-grid"]}>
            <div className={styles["tool"]}>Mailchimp</div>
            <div className={styles["tool"]}>HubSpot</div>
            <div className={styles["tool"]}>Klaviyo</div>
            <div className={styles["tool"]}>ActiveCampaign</div>
          </div>
        </section>

        <section className={`${styles["email-process"]} ${styles["py-5"]}`}>
          <div className={styles["container"]}>
            <h2 className={`${styles["text-center"]} ${styles["mb-5"]} ${styles["process-title"]}`}>Our Strategic Process</h2>

            <div className={`${styles["row"]} ${styles["justify-content-center"]}`}>
              <div className={`${styles["col-md-4"]} ${styles["mb-4"]}`}>
                <div className={`${styles["timeline-step"]} ${styles["text-center"]} ${styles["p-3"]} ${styles["border"]} ${styles["rounded"]} ${styles["h-100"]}`}>
                  <div className={`${styles["step-icon"]} ${styles["fs-2"]} ${styles["mb-2"]}`}>🔍</div>
                  <h5 className={styles["fw-bold"]}>Audience Analysis</h5>
                  <p className={styles["small"]}>Understand target demographics, behaviors, and preferences to tailor campaigns.</p>
                </div>
              </div>
              <div className={`${styles["col-md-4"]} ${styles["mb-4"]}`}>
                <div className={`${styles["timeline-step"]} ${styles["text-center"]} ${styles["p-3"]} ${styles["border"]} ${styles["rounded"]} ${styles["h-100"]}`}>
                  <div className={`${styles["step-icon"]} ${styles["fs-2"]} ${styles["mb-2"]}`}>📝</div>
                  <h5 className={styles["fw-bold"]}>Campaign Planning</h5>
                  <p className={styles["small"]}>Design goal-driven email strategies with proper segmentation and timelines.</p>
                </div>
              </div>
              <div className={`${styles["col-md-4"]} ${styles["mb-4"]}`}>
                <div className={`${styles["timeline-step"]} ${styles["text-center"]} ${styles["p-3"]} ${styles["border"]} ${styles["rounded"]} ${styles["h-100"]}`}>
                  <div className={`${styles["step-icon"]} ${styles["fs-2"]} ${styles["mb-2"]}`}>🎨</div>
                  <h5 className={styles["fw-bold"]}>Design & Copywriting</h5>
                  <p className={styles["small"]}>Create engaging email templates with compelling visuals and persuasive content.</p>
                </div>
              </div>
            </div>

            <div className={`${styles["row"]} ${styles["justify-content-center"]}`}>
              <div className={`${styles["col-md-4"]} ${styles["mb-4"]}`}>
                <div className={`${styles["timeline-step"]} ${styles["text-center"]} ${styles["p-3"]} ${styles["border"]} ${styles["rounded"]} ${styles["h-100"]}`}>
                  <div className={`${styles["step-icon"]} ${styles["fs-2"]} ${styles["mb-2"]}`}>🚀</div>
                  <h5 className={styles["fw-bold"]}>Launch & Automate</h5>
                  <p className={styles["small"]}>Deploy campaigns with smart automation for personalized customer journeys.</p>
                </div>
              </div>
              <div className={`${styles["col-md-4"]} ${styles["mb-4"]}`}>
                <div className={`${styles["timeline-step"]} ${styles["text-center"]} ${styles["p-3"]} ${styles["border"]} ${styles["rounded"]} ${styles["h-100"]}`}>
                  <div className={`${styles["step-icon"]} ${styles["fs-2"]} ${styles["mb-2"]}`}>📊</div>
                  <h5 className={styles["fw-bold"]}>Optimize & Report</h5>
                  <p className={styles["small"]}>Analyze metrics and continuously refine performance for better ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <footer className={styles["email-cta"]}>
          <button className={styles["btn9"]} onClick={handleBookCall}>Book a Free Consultation</button>
        </footer>
      </div>
            <Footer/>
    </>
  );
};

export default Email;