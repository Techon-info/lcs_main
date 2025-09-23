// src/pages/SearchEngineMarketing.jsx
import React from "react";
import styles from "./Seo.module.css"; // ✅ Reuse SEO styles or create SEM.module.css if preferred
import {
  FaBullseye,
  FaMoneyBillWave,
  FaChartLine,
  FaAd,
  FaSearchDollar,
  FaUserCheck,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import semBanner from "../assets/search_engine_marketing.png"; // ✅ Place a Google Ads banner image in assets
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const highlights = [
  { icon: <FaMoneyBillWave />, text: "3x ROI on Google Ad spend in just 90 days" },
  { icon: <FaChartLine />, text: "200% increase in qualified leads" },
  { icon: <FaUserCheck />, text: "Laser-focused audience targeting for conversions" },
  { icon: <FaHandshake />, text: "Trusted by 50+ brands for paid ad success" },
];

const strategyItems = [
  {
    icon: <FaBullseye className="text-danger fs-4 me-3 mt-1" />,
    title: "Precise Targeting",
    desc: "We ensure your ads reach the right people at the right time."
  },
  {
    icon: <FaAd className="text-primary fs-4 me-3 mt-1" />,
    title: "Compelling Ad Creatives",
    desc: "Engaging ad copies that drive clicks and conversions."
  },
  {
    icon: <FaSearchDollar className="text-success fs-4 me-3 mt-1" />,
    title: "Budget Optimization",
    desc: "Maximize ROI by optimizing every dollar of ad spend."
  },
  {
    icon: <FaGlobeAmericas className="text-info fs-4 me-3 mt-1" />,
    title: "Global Reach",
    desc: "Expand visibility from local markets to worldwide campaigns."
  },
];

const SearchEngineMarketing = () => {
  const navigate = useNavigate();
  const handleBookCall = () => navigate("/contact");

  return (
    <div>
      <Navbar />
      <div className={styles.seoPage}>
        {/* Hero Section */}
        <section className={styles.seoHero}>
          <div className={styles.seoHeroContent}>
            <h1 className={styles.seoHeroHeading}>
              Boost Conversions with Google Ads
            </h1>
            <p className={styles.seoHeroSubtitle}>
              At <strong>LCS</strong>, our <b>Search Engine Marketing (SEM)</b> 
              solutions focus exclusively on <b>Google Ads</b> to drive high-quality leads, 
              instant visibility, and measurable business growth. 
              From search campaigns and display ads to remarketing and shopping ads, 
              our team ensures every click counts and every dollar delivers results.
            </p>
            <button
              className={styles.seoHeroButton}
              onClick={() => window.location.href = "/contact"}
            >
              Start Your Campaign
            </button>
          </div>
          <div className={styles.seoHeroImage}>
            <img src={semBanner} alt="Search Engine Marketing Banner" />
          </div>
        </section>

        {/* Why Google Ads */}
        <div className={styles.seoContainer}>
          <h2 className={styles.seoSubheading}>Why Choose Google Ads?</h2>
          <div className={styles.seoCards}>
            <div className={styles.seoCard}>
              Instant Visibility<br /><span>Appear at the top of search results today</span>
            </div>
            <div className={styles.seoCard}>
              Targeted Reach<br /><span>Connect with people actively searching for your service</span>
            </div>
            <div className={styles.seoCard}>
              Measurable ROI<br /><span>Track every impression, click, and conversion</span>
            </div>
            <div className={styles.seoCard}>
              Flexible Budgeting<br /><span>Scale ad spend up or down anytime</span>
            </div>
            <div className={styles.seoCard}>
              Competitive Edge<br /><span>Outperform rivals bidding for the same keywords</span>
            </div>
          </div>

          {/* Strategy */}
          <h2 className={styles.seoSubheading}>Our SEM Approach</h2>
          <motion.ul
            className="list-unstyled row g-4 py-4 px-md-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {strategyItems.map((item, index) => (
              <motion.li
                key={index}
                className="col-md-6 d-flex align-items-start"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <div>
                  <strong>{item.title}:</strong> {item.desc}
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Results */}
          <h2 className={styles.seoSubheading}>Proven Results</h2>
          <div className={styles.performanceSection}>
            <ul className={styles.timeline}>
              {highlights.map((item, index) => (
                <li key={index} className={styles.timelineItem}>
                  <span className={styles.timelineIcon}>{item.icon}</span>
                  <span className={styles.timelineText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <h2 className={styles.seoSubheading}>Let’s Maximize Your ROI</h2>
          <p>
            With <strong>Google Ads</strong>, results are instant and measurable. 
            Partner with us to create a campaign that converts clicks into loyal customers.
          </p>
          <div className={styles.seoButtonContainer}>
            <button className={styles.seoHeroButton} onClick={handleBookCall}>
              Launch My Campaign
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchEngineMarketing;
