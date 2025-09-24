import React from 'react';
import styles from './Contentcreation.module.css'; // Dedicated CSS for Strategy Page
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FaChartLine, FaUserTie, FaLightbulb } from 'react-icons/fa';
import { CheckCircle } from 'react-feather';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import strategyBanner from '../assets/strategy.jpg'; // Add your banner image

const StrategyPage = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  const values = [
    ["Data-Driven Insights", "Our strategies are based on facts, figures, and research – not assumptions."],
    ["Competitive Edge", "We identify unique differentiators that help your business stand out."],
    ["Goal-Oriented", "Each strategy is aligned with your short-term and long-term business goals."],
    ["Sustainable Growth", "Our strategies focus on lasting impact, not just quick wins."]
  ];

  return (
    <div>
      <Navbar />
      <div className={styles["strategy-container"]}>

        {/* Hero Section */}
        <section className={styles["hero-grid"]}>
          <div className={styles["hero-text"]}>
            <h1 className="fw-bold display-5 custom-heading-center">Market Research & Strategy</h1>
            <p>
              At <strong>LCS</strong>, we empower businesses to make smarter decisions through comprehensive <strong>Market Research</strong>, precise <strong>Competitor Analysis</strong>, and actionable <strong>Strategy Making</strong>. 
              Stay ahead in your industry with insights that drive measurable success.
            </p>
            <button className={styles["cta-button"]} onClick={handleBookCall}>Book a Consultation</button>
          </div>
          <div className={styles["hero-image"]}>
            <img src={strategyBanner} alt="Strategy Banner" />
          </div>
        </section>

        {/* Carousel Section */}
        <section className={styles["carousel-section"] + " py-5"}>
          <h2 className="text-center mb-4">Our Strategic Approach</h2>
          <p className="text-center mb-5 text-muted">Every successful business decision starts with insight and ends with a winning strategy.</p>
          <Carousel indicators={false} interval={6000} pause="hover">
            <Carousel.Item>
              <div className={styles["carousel-slide"] + " d-flex flex-column align-items-center text-center"}>
                <FaChartLine className={styles["strategy-icon"] + " mb-3"} />
                <h3>Market Research</h3>
                <p>We analyze industry trends, customer behavior, and emerging opportunities to guide informed decision-making.</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles["carousel-slide"] + " d-flex flex-column align-items-center text-center"}>
                <FaUserTie className={styles["strategy-icon"] + " mb-3"} />
                <h3>Competitor Analysis</h3>
                <p>We study your competitors’ strengths and weaknesses to craft strategies that outperform and differentiate your brand.</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles["carousel-slide"] + " d-flex flex-column align-items-center text-center"}>
                <FaLightbulb className={styles["strategy-icon"] + " mb-3"} />
                <h3>Strategy Making</h3>
                <p>We create actionable, data-backed strategies aligned with your business goals to maximize growth and ROI.</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Values Section */}
        <section className={styles["values-section"] + " py-5"}>
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: '#008080' }}>Why Our Strategy Works</h2>
              <p className="text-muted" style={{ color: '#666666' }}>A combination of research, analysis, and creative planning for sustainable success.</p>
            </div>
            <div className="row">
              {values.map(([title, desc], idx) => (
                <div className="col-md-6 mb-4 d-flex" key={idx}>
                  <CheckCircle className="text-success me-3 mt-1" size={24} />
                  <div>
                    <h6 className="mb-1 fw-semibold" style={{ color: '#1c1c1c' }}>{title}</h6>
                    <p className="mb-0" style={{ color: '#555' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles["cta-section"]}>
          <h2>🚀 Ready to Outperform the Competition?</h2>
          <p>Partner with us to turn insights into action and strategies into measurable growth.</p>
          <button className={styles["cta-button"]} onClick={handleBookCall}>Get Started</button>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default StrategyPage;
