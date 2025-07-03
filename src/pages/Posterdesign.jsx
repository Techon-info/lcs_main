import React from "react";
import styles from "./Posterdesign.module.css"; // Updated import
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import poster from "../assets/poster.jpeg";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";


const Posterdesign = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <div>
      <Navbar/>
    <div className={styles["poster-designing-container"]}>
      {/* Hero Section */}
      <section className={styles["hero-grid"]}>
        <div className={styles["hero-text"]}>
          <h1 className={styles["hero-heading"]}>Poster Designing</h1>
          <p className={styles["hero-description"]}>
            Transform your ideas into eye-catching posters with our professional design services.
            From event promotions to product launches and brand campaigns, we blend creativity with
            strategy to deliver visually stunning posters that capture attention and communicate your message effectively.
            Whether you need bold visuals, clean minimalism, or themed artwork, our designs are tailored to
            resonate with your target audience and elevate your brand presence.
          </p>
          <button className={styles["cta-button"]} onClick={handleBookCall}>Contact Us</button>
        </div>
        <div className={styles["hero-image"]}>
          <img src={poster} alt="Creative Poster Design Banner" />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Our Poster Design Services</h2>
        <div className={styles["service-cards"]}>
          <div className={styles.card}>
            <h3>Event Promotion</h3>
            <p>Vibrant designs to promote events and attract attendees.</p>
          </div>
          <div className={styles.card}>
            <h3>Marketing Posters</h3>
            <p>Professional posters to advertise your business and offers.</p>
          </div>
          <div className={styles.card}>
            <h3>Custom Creations</h3>
            <p>Tailored poster designs for your unique needs and themes.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2>Our Creative Design Process</h2>
        <div className={styles["process-steps"]}>
          <div className={styles.step}>
            <div className={styles["step-number"]}>1</div>
            <h3>Consultation</h3>
            <p>We begin with a friendly discussion to understand your goals, brand identity, and target audience.</p>
          </div>
          <div className={styles.step}>
            <div className={styles["step-number"]}>2</div>
            <h3>Concept & Brainstorming</h3>
            <p>We sketch and wireframe multiple poster concepts based on your ideas, trends, and inspirations.</p>
          </div>
          <div className={styles.step}>
            <div className={styles["step-number"]}>3</div>
            <h3>Collaborative Feedback</h3>
            <p>You review the drafts, share feedback, and we refine the designs together to match your vision perfectly.</p>
          </div>
          <div className={styles.step}>
            <div className={styles["step-number"]}>4</div>
            <h3>Final Touches & Delivery</h3>
            <p>We polish the selected design and deliver high-resolution files optimized for print and digital use.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.gallery} ${styles.py5}`}>
        <div className={styles.container}>
          <h2 className={`${styles.textCenter} ${styles.mb4} text-center mb-4`}>Gallery</h2>
          <div className={`styles.dFlex d-flex justify-content-center`}>
            <div className={`${styles["gallery-scroll"]} ${styles.dFlex} ${styles.overflowAuto} ${styles.gap3} ${styles.px2} ${styles.ps3} gallery-scroll d-flex overflow-auto gap-3 px-2 ps-3` }>
              <img src={poster1} alt="Event Promotion Poster" className={styles["gallery-img"]} />
              <img src={poster2} alt="Marketing Campaign Poster" className={styles["gallery-img"]} />
              <img src={poster3} alt="Custom Event Poster" className={styles["gallery-img"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles["call-to-action"]}>
        <h2>Ready to Make an Impact?</h2>
        <p>Contact us today to start your poster design project!</p>
        <button className={styles["cta-button"]} onClick={handleBookCall}>Contact Us</button>
      </section>
    </div>
    <Footer/>
  </div>
  );
};

export default Posterdesign;
