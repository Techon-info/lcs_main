import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { GiGrowth } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Navbar from '../components/Navbar';
import carousel1 from '../assets/carousel1.avif';
import carousel2 from '../assets/carousel2.avif';
import carousel3 from '../assets/carousel3.avif';
import founder from '../assets/founder.jpg'



const Home = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <>
    <Navbar/>
      <div className={styles.homeContainer}>
        {/* Hero Section */}
        <div className={styles.homeWrapper}>
          <div className="row align-items-center">
            <div className={`col-md-6 ${styles.homeLeft}`}>
              <h1 className={styles.homeTitle}>Empowering Brands. Elevating Growth.</h1>
              <p className={styles.homeDescription}>
                At Lazeno Consultancy Services, we help ambitious businesses thrive with expert consulting, innovative strategies, and impactful digital solutions. From content creation to SEO, we craft your success story.
              </p>
              <h2 className={styles.tagline}>"Your vision our digital strategy."</h2>
              <button className={styles.homeButton} onClick={handleBookCall}>Book a Discovery Call</button>
            </div>

            <div className={`col-md-6 ${styles.homeRight}`}>
              <Carousel interval={3000} controls indicators={true} fade>
                <Carousel.Item>
                  <img className="d-block w-100 rounded shadow" src={carousel1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 rounded shadow" src={carousel2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 rounded shadow" src={carousel3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        
         {/* Innovation Section */}
        <div className={styles.innovationHighlights}>
          <h2 className={styles.sectionHeading}>From Vision to Innovation</h2>
          <p className={styles.sectionSubtext}>
            At Lazeno, we transform traditional strategies into cutting-edge digital experiences through relentless innovation and a deep understanding of evolving market needs.
          </p>
          <div className={styles.innovationCards}>
            <div className={styles.innovationCard}>
              <FaLightbulb className={styles.iconImg} />
              <h4>Innovative Strategy</h4>
              <p>
                We redefine digital growth with tailor-made strategies powered by AI, data analytics, and creativity to stay ahead of the curve.
              </p>
            </div>

            <div className={styles.innovationCard}>
              <FaUsers className={styles.iconImg} />
              <h4>Client-Centric Approach</h4>
              <p>
                Every decision we make is rooted in understanding our clients' business goals and crafting solutions that deliver real impact.
              </p>
            </div>

            <div className={styles.innovationCard}>
              <GiGrowth className={styles.iconImg} />
              <h4>Future-Ready Growth</h4>
              <p>
                From smart automation to scalable infrastructure, we future-proof your digital ecosystem for sustained growth and resilience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Manager Section */}
        <div className={styles.managerDetailsSection}>
          <div className={styles.managerGrid}>
            <div className={styles.managerImageWrapper}>
              <img src={founder} alt="Manager Profile" className={styles.managerProfileImg} />
            </div>
            <div className={styles.managerContent}>
              <h2 className={styles.managerName}>Mr.Muhammed Hassan S (Founder&CEO)</h2>
              <p className={styles.managerBio}>
                 At Lazeno Consultancy Services, we assure you of expert consulting and digital marketing solutions tailored to your unique needs. With years of experience and a proven track record, our team is dedicated to delivering results-driven strategies that drive real growth. We prioritize transparency, communication, and measurable results. Our team stays up-to-date with the latest trends and technologies to ensure cutting-edge solutions. Trust us to empower your business with innovative and effective digital marketing strategies.
              </p>
              <p className={styles.managerVision}>
                "Leadership is about building a legacy, not just profits. At Lazeno, we lead with empathy, evolve with strategy, and deliver with excellence."
              </p>
            </div>
          </div>
        </div>

       
      </div>
      <Footer />
    </>
  );
};

export default Home;
