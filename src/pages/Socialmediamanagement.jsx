import React from "react";
import styles from "./Socialmediamanagement.module.css"; // Updated import
import {
  FaBullhorn,
  FaSeedling,
  FaAward,
  FaLayerGroup,
  FaRobot,
  FaUserTie,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import management from "../assets/management.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Socialmediamanagement = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate("/contact");
  };

  const features = [
    {
      icon: <FaBullhorn className={`${styles.icon} text-primary`} />,
      title: "Customized Content",
      desc: "Your brand voice, amplified with creativity and precision.",
    },
     {
      icon: <FaSeedling className="icon text-success" />,
      title: "Consistent Growth",
      desc: "Sustainable organic engagement through authentic community building.",
    },
    {
      icon: <FaAward className="icon text-warning" />,
      title: "Creative Excellence",
      desc: "Award-winning design and storytelling that converts followers into customers.",
    },
    {
      icon: <FaLayerGroup className="icon text-info" />,
      title: "Omni-Channel Mastery",
      desc: "We unify your presence across all key platforms seamlessly.",
    },
    {
      icon: <FaRobot className="icon text-danger" />,
      title: "Cutting-Edge Tech",
      desc: "AI-driven targeting, sentiment analysis, and optimization.",
    },
    {
      icon: <FaUserTie className="icon text-secondary" />,
      title: "Dedicated Managers",
      desc: "Your personal team, focused on success and consistent communication.",
    },
  ];

  return (
    <div>
      <Navbar/>
    <div className={styles["smm-container"]}>
      <div className={styles["smm-hero-section"]}>
        <div className={styles["smm-hero-text"]}>
          <h1 className={`${styles["smm-heading"]} ${styles["animate-fadeInDown"]}`}>
            Social Media Management
          </h1>
          <p className={`${styles["smm-description"]} ${styles["animate-fadeInUp"]}`}>
            In today’s digital age, your customers live on social media — and so
            should your brand. Whether it's Instagram, Facebook, LinkedIn, or X
            (formerly Twitter), our social media strategies build engagement,
            community, and trust that translate into real business results. We
            ensure your brand maintains a consistent voice and visual identity
            across platforms, creating a memorable presence that drives loyalty
            and conversions.
          </p>
          <button className={styles["smm-button"]} onClick={handleBookCall}>
            Contact Us
          </button>
        </div>
        <div className={`${styles["smm-hero-image"]} ${styles["animate-fadeInRight"]}`}>
          <img src={management} alt="Social Media Management" />
        </div>
      </div>

      <h2 className={`${styles["smm-subheading"]} ${styles["animate-fadeInLeft"]}`}>What We Offer</h2>
      <div className={styles["smm-cards"]}>
        <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
          <h3>Content Creation</h3>
          <p>
            Visually stunning graphics, short-form videos, and interactive posts
            tailored to your audience's preferences.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
           <h3>Social Strategy & Trendspotting</h3>
          <p>
            Data-driven strategies combined with real-time trend analysis to
            keep your brand relevant and ahead of the curve.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
            <h3>Automated Posting & Smart Scheduling</h3>
          <p>
            Optimized timing through AI-powered scheduling tools ensuring
            maximum reach and engagement.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
           <h3>Community Management & Crisis Handling</h3>
          <p>
            Proactive engagement, sentiment analysis, and rapid response to
            protect and grow your brand reputation.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
          <h3>Performance & Sentiment Analytics</h3>
          <p>
            In-depth monthly reports with actionable insights, influencer
            impact, and customer sentiment metrics.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
           <h3>Influencer & Micro-Influencer Collaborations</h3>
          <p>
            Strategic partnerships with niche influencers to build authentic
            connections and expand your reach.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
          <h3>Social Commerce Integration</h3>
          <p>
            Seamlessly connect your social media with e-commerce for direct
            sales and lead generation.
          </p>
        </div>
         <div className={`${styles["smm-card"]} ${styles["animate-scaleUp"]}`}>
           <h3>Innovative AR & Filter Campaigns</h3>
          <p>
            Engage your audience with branded AR filters and immersive social
            experiences to boost shareability.
          </p>
        </div>
        {/* Other cards... */}
      </div>

      <section className={`${styles["why-us-section"]} ${styles.container} ${styles["py-5"]}`}>
        <h2 className={`${styles["smm-subheading"]} ${styles["text-center"]} ${styles["mb-5"]} ${styles["animate-fadeInLeft"]}`}>
          Why Choose Us?
        </h2>
        <div className={`${styles.row} ${styles["g-4"]}`}>
          {features.map((item, index) => (
            <div
              key={index}
              className={`${styles["col-md-6"]} ${styles["d-flex"]} ${styles["align-items-start"]} ${styles["animate-fadeInUp"]} ${styles[`delay-${index + 1}`]}`}
            >
              {item.icon}
              <div className={styles["ms-3"]}>
                <h5 className={`${styles["fw-bold"]} ${styles["mb-1"]}`}>{item.title}</h5>
                <p className={styles["mb-0"]}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={`${styles["smm-innovative-ideas-wrapper"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["px-3"]}`}>
        <div className={`${styles["smm-innovative-ideas-container"]} ${styles["text-start"]} ${styles["position-relative"]}`}>
          <div className={styles["vertical-line-arrow"]} />
          <ul className={`${styles["innovative-ideas-list"]} ${styles["list-unstyled"]} ${styles["m-0"]}`}>
            <li
              className={`${styles["idea-item"]} ${styles["animate-slideInRight"]}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className={styles["idea-point"]}>🔍</span> Advanced Audience Targeting with AI
            </li>
            {/* Other list items... */}
              <li
              className={`${styles["idea-item"]} ${styles["animate-slideInRight"]}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className={styles["idea-point"]}>🎯</span> Hyper-Personalized Content
              Delivery
            </li>

              <li
              className={`${styles["idea-item"]} ${styles["animate-slideInRight"]}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className={styles["idea-point"]}>📈</span> Real-time Performance
              Optimization
            </li>

              <li
              className={`${styles["idea-item"]} ${styles["animate-slideInRight"]}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className={styles["idea-point"]}>🤝</span> Authentic Influencer
              Partnerships
            </li>
              <li
              className={`${styles["idea-item"]} ${styles["animate-slideInRight"]}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className={styles["idea-point"]}>🚀</span> AR-powered Interactive
              Campaigns
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["smm-button-container"]}>
        <button
          className={styles["socio-btn"]}
          onClick={() => (window.location.href = "/contact")}
        >
          📅 Let's Build Your Social Presence
        </button>
        
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Socialmediamanagement;