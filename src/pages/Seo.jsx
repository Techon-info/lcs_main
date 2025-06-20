import React from 'react';
import styles from './Seo.module.css';
import { FaSearch, FaTools, FaCogs, FaPenNib, FaLink, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaLightbulb, FaShieldAlt, FaGlobe, FaRobot, FaHandsHelping } from 'react-icons/fa';
import { FaChartLine, FaSearchDollar, FaPhoneAlt, FaSmileBeam } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import seo from '../assets/seoo.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const highlights = [
  { icon: <FaChartLine />, text: '400% increase in organic traffic in 6 months' },
  { icon: <FaSearchDollar />, text: 'Top-3 Google rankings for 100+ competitive keywords' },
  { icon: <FaPhoneAlt />, text: '200% boost in lead generation and phone inquiries' },
  { icon: <FaSmileBeam />, text: '95% client retention rate with proven satisfaction' },
];

const strategyItems = [
  { icon: <FaLightbulb className="text-warning fs-4 me-3 mt-1" />, title: 'Custom Strategy', desc: 'No copy-paste tactics. We tailor your SEO to your business goals.' },
  { icon: <FaShieldAlt className="text-success fs-4 me-3 mt-1" />, title: 'White-Hat Approach', desc: 'Ethical, long-term SEO techniques that won’t get you penalized.' },
  { icon: <FaGlobe className="text-primary fs-4 me-3 mt-1" />, title: 'Local to Global', desc: 'Whether you’re a local shop or a global brand, we scale accordingly.' },
  { icon: <FaRobot className="text-danger fs-4 me-3 mt-1" />, title: 'AI-Driven Insights', desc: 'Using the latest tools, including AI, for smarter decision-making.' },
  { icon: <FaHandsHelping className="text-info fs-4 me-3 mt-1" />, title: 'Support That Cares', desc: 'Real SEO experts who understand your business, not bots.' },
];

const Seo = () => {
  const navigate = useNavigate();
  const handleBookCall = () => navigate('/contact');

  return (
    <div>
      <Navbar/>
    <div className={styles.seoPage}>
      <section className={styles.seoHero}>
        <div className={styles.seoHeroContent}>
          <h1 className={styles.seoHeroHeading}>Drive Results with Expert SEO Solutions</h1>
          <p className={styles.seoHeroSubtitle}>
            Want to be found on Google? SEO is the foundation of a strong digital presence.
            Stand out with a <strong>strategic, data-driven SEO plan</strong> targeting what your audience is searching for.
            From comprehensive keyword research and technical optimization to high-quality content and authoritative backlinks,
            we ensure your brand ranks higher, drives organic traffic, and stays ahead of the competition.
            Let us turn your website into a lead-generating powerhouse with smart, sustainable SEO tactics.
          </p>
          <button className={styles.seoHeroButton} onClick={() => window.location.href = '/contact'}>
            Contact us
          </button>
        </div>
        <div className={styles.seoHeroImage}>
          <img src={seo} alt="SEO Solutions Banner" />
        </div>
      </section>

      <div className={styles.seoContainer}>
        <h2 className={styles.seoSubheading}>Why Choose SEO for Your Business?</h2>
        <div className={styles.seoCards}>
          <div className={styles.seoCard}>Be Seen<br /><span>Appear on the first page of Google</span></div>
          <div className={styles.seoCard}>Get More Clicks<br /><span>Drive traffic from real users</span></div>
          <div className={styles.seoCard}>Build Trust<br /><span>Higher ranking = higher credibility</span></div>
          <div className={styles.seoCard}>Outrank Competitors<br /><span>Stay ahead in your industry</span></div>
          <div className={styles.seoCard}>Long-Term ROI<br /><span>Organic traffic 24/7</span></div>
        </div>

        <h2 className={styles.seoSubheading}>Our End-to-End SEO Services</h2>
        <ul className={`list-unstyled row g-4 ${styles.seoList}`}>
          <li className="col-md-6 d-flex align-items-start">
            <FaSearch className="me-3 text-warning fs-4 mt-1" />
            <div><strong>Keyword Intelligence:</strong> We uncover high-intent keywords your audience is already Googling.</div>
          </li>
          <li className="col-md-6 d-flex align-items-start">
            <FaTools className="me-3 text-primary fs-4 mt-1" />
            <div><strong>On-Page SEO:</strong> From meta tags to internal linking, we optimize every pixel of your content.</div>
          </li>
          <li className="col-md-6 d-flex align-items-start">
            <FaCogs className="me-3 text-success fs-4 mt-1" />
            <div><strong>Technical SEO:</strong> Speed, security, mobile-friendliness — we handle the backend magic.</div>
          </li>
          <li className="col-md-6 d-flex align-items-start">
            <FaPenNib className="me-3 text-danger fs-4 mt-1" />
            <div><strong>Content Creation:</strong> Informative, SEO-rich blog posts that convert readers into customers.</div>
          </li>
          <li className="col-md-6 d-flex align-items-start">
            <FaLink className="me-3 text-info fs-4 mt-1" />
            <div><strong>Authority Building:</strong> Earn powerful backlinks from reputable sources in your niche.</div>
          </li>
          <li className="col-md-6 d-flex align-items-start">
            <FaChartBar className="me-3 text-secondary fs-4 mt-1" />
            <div><strong>Data & Analytics:</strong> Transparent reports that show you exactly what’s working — and what’s next.</div>
          </li>
        </ul>

        <h2 className={styles.seoSubheading}>What Sets Us Apart?</h2>
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
              <div><strong>{item.title}:</strong> {item.desc}</div>
            </motion.li>
          ))}
        </motion.ul>

        <h2 className={styles.seoSubheading}>Explore More SEO Benefits</h2>
        <div className={styles.seoSquareCards}>
          <div className={styles.seoSquareCard}><h3>Mobile SEO</h3><p>Optimize your site for mobile-first indexing & improve user experience.</p></div>
          <div className={styles.seoSquareCard}><h3>Local SEO</h3><p>Appear in local searches and maps to attract nearby customers.</p></div>
          <div className={styles.seoSquareCard}><h3>Voice Search</h3><p>Adapt to smart assistants with voice-friendly keywords and content.</p></div>
          <div className={styles.seoSquareCard}><h3>E-Commerce SEO</h3><p>Boost sales by optimizing your product pages and categories.</p></div>
        </div>

        <h2 className={styles.seoSubheading}>Our Results Speak for Themselves</h2>
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

        <h2 className={styles.seoSubheading}>Let’s Talk Results</h2>
        <p>
          You're just one click away from transforming your website into a lead-generating powerhouse.
          Our team of SEO specialists is ready to partner with you to dominate your niche. Ready to be #1 on Google?
        </p>

        <div className={styles.seoButtonContainer}>
          <button className={styles.seoHeroButton} onClick={handleBookCall}>
            Get Your Free SEO Audit
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Seo;