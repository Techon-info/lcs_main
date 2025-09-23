import React from 'react';
import styles from './Contentcreation.module.css'; // Reuse same styles
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FaBullhorn, FaUsers, FaChartLine } from 'react-icons/fa';
import { CheckCircle } from 'react-feather';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHashtag
} from "react-icons/fa";
import smmBanner from '../assets/SOCIAL_MEDIA_MARKETING.png'; // Add banner image
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Socialmediamarketing = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  const smmServices = [
    { icon: <FaFacebookF />, title: 'Facebook Marketing', desc: 'Engaging ads and content to maximize reach on Facebook.' },
    { icon: <FaInstagram />, title: 'Instagram Growth', desc: 'Creative reels, stories, and visuals to capture attention.' },
    { icon: <FaTwitter />, title: 'Twitter Strategy', desc: 'Engaging tweets and trends that drive conversations.' },
    { icon: <FaLinkedin />, title: 'LinkedIn Branding', desc: 'Professional campaigns for B2B networking and leads.' },
    { icon: <FaYoutube />, title: 'YouTube Campaigns', desc: 'Video marketing strategies to boost subscribers and views.' },
    { icon: <FaHashtag />, title: 'Hashtag Campaigns', desc: 'Smart hashtag strategies to increase organic visibility.' },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles["content-creation-container"]}>
        {/* Hero Section */}
        <section className={styles["hero-grid"]}>
          <div className={styles["hero-text"]}>
            <h1 className="fw-bold display-5 custom-heading-center">Social Media Marketing</h1>
            <p>
              At <strong>LCS</strong>, we provide Social Media Marketing strategies designed by our expert team.
              Our primary goal is to craft compelling campaigns and advertisements across all Meta platforms,
              helping your brand reach the right audience, build awareness, and drive measurable results.
            </p>
            <button className={styles["cta-button"]} onClick={handleBookCall}>Let’s Connect</button>
          </div>
          <div className={styles["hero-image"]}>
            <img src={smmBanner} alt="Social Media Marketing Banner" />
          </div>
        </section>

        <div className={styles["content-inner-wrapper"]}>
          {/* Strategy Carousel */}
          <section className={styles["strategy-carousel-section"] + " py-5"}>
            <h2 className="text-center mb-4">Our Social Media Strategy</h2>
            <p className="text-center mb-5 text-muted">We follow a results-driven approach to maximize your social impact:</p>
            <Carousel indicators={false} interval={6000} pause="hover">
              <Carousel.Item>
                <div className={styles["carousel-slide"] + " d-flex flex-column align-items-center text-center"}>
                  <FaBullhorn className={styles["strategy-icon"] + " mb-3"} />
                  <h3>Ad Campaigns</h3>
                  <p>We create impactful ad campaigns that capture attention and convert leads effectively.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles["carousel-slide"] + " d-flex flex-column align-items-center text-center"}>
                  <FaUsers className={styles["strategy-icon"] + " mb-3"} />
                  <h3>Community Engagement</h3>
                  <p>Building meaningful connections with your audience to strengthen brand loyalty.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles["carousel-slide"] + " d-flex flex-column align-items-center text-center"}>
                  <FaChartLine className={styles["strategy-icon"] + " mb-3"} />
                  <h3>Performance Analytics</h3>
                  <p>We track and analyze data to optimize campaigns and maximize ROI.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </section>

          {/* Services Section */}
          {/* Services Section */}
<section className={`${styles["content"]} py-5`}>
  <div className="container">
    <h2 className={`${styles["sections"]} text-center mb-5`} style={{ color: '#008080' }}>
      Our Core Services
    </h2>
    <div className="row justify-content-center">
      {smmServices.map((service, idx) => (
        <div className="col-lg-4 col-md-6 mb-4" key={idx}>
          <div className={`${styles["contentcards"]} shadow-sm h-100`}>
            <div className={styles["iconwrappers"]} style={{ color: '#008080' }}>{service.icon}</div>
            <h3 className="fw-semibold" >{service.title}</h3>
            <p className="text-muted">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* Why Choose Us */}
          <section className={styles["content-values-section"] + " py-5"}>
            <div className="container">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: '#008080' }}>Why Choose LCS for SMM?</h2>
                <p className="text-muted" style={{ color: '#666666' }}>We blend creativity, strategy, and data for impactful results.</p>
              </div>

              <div className="row">
                {[
                  ["Creative Campaigns", "Our unique creatives capture audience attention instantly."],
                  ["Data-Driven Strategy", "We base every move on analytics and measurable performance."],
                  ["Cross-Platform Expertise", "From Meta to LinkedIn, we cover every platform."],
                  ["ROI Focused", "Our campaigns are designed to generate leads and boost sales."]
                ].map(([title, desc], idx) => (
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

          {/* Call to Action */}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Socialmediamarketing;
