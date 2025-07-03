import React from "react";
import styles from "./About.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import { Carousel } from "react-bootstrap";
import {
  FaPenNib, FaPaintBrush, FaSearch, FaUsers, FaVideo,
  FaEnvelopeOpenText, FaChartLine, FaQuoteLeft,
  FaBullseye, FaEye, FaHandshake, FaStar, FaRocket, FaCogs
} from "react-icons/fa";

const testimonials = [
    {
    image:client1,
    name: "City Bags",
    feedback: "Lazeno did an awesome job on our logo! Fast, affordable, and perfect results. Highly recommend!",
  },
  {
    image: client2,
    name: "Star Foods",
    feedback: "Lazeno did great work for Star Food!  They designed eye-catching posters that made our food look amazing and brought us more customers. Easy to work with, delivered on time, and got real results. Highly recommend!",
  },
];

const services = [
  { icon: <FaPenNib />, title: "Content Creation", description: "Tailored content that informs, inspires, and converts — your voice, amplified." },
  { icon: <FaPaintBrush />, title: "Poster Designing", description: "Striking visuals that align brand identity with creativity." },
  { icon: <FaSearch />, title: "SEO Optimization", description: "Precision-tuned strategies to elevate search rankings." },
  { icon: <FaUsers />, title: "Social Media Management", description: "Engaging communities and authentic online growth." },
  { icon: <FaVideo />, title: "Video Editing", description: "Dynamic visuals that captivate and communicate." },
  { icon: <FaEnvelopeOpenText />, title: "Email Marketing", description: "Targeted messaging with automation and analytics." },
  { icon: <FaChartLine />, title: "Business Consultancy", description: "Smart strategies from ideation to execution." },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const About = () => {
  const testimonialChunks = chunkArray(testimonials, 2);

  return (
    <>
      <Navbar />
      <div className={`container py-5 ${styles.about}`}>
        <section className="mb-5">
          <h2 className={`text-center mb-3 ${styles.aboutHeading}`}>Lazeno Consultancy Services</h2>
          <p className="text-center mx-auto" style={{ maxWidth: '750px', color: '#555' }}>
            We are your growth partners in the digital world. At Lazeno, we combine creativity, strategy,
            and technology to deliver solutions that build your brand, drive traffic, and convert leads.
          </p>
        </section>

        <div className="row text-center mb-5">
          <div className="col-md-6 mb-4">
            <div className={`p-4 shadow-sm ${styles.infoBox}`}>
              <FaEye className={styles.infoIcon} />
              <h4 className="mt-3">Our Vision</h4>
              <p>To set new benchmarks in digital marketing by delivering measurable value and creative excellence.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className={`p-4 shadow-sm ${styles.infoBox}`}>
              <FaBullseye className={styles.infoIcon} />
              <h4 className="mt-3">Our Mission</h4>
              <p>Delivering smart, data-driven digital marketing strategies to help brands connect, grow, and lead.</p>
            </div>
          </div>
        </div>

        <section className="mb-5">
          <h3 className={`text-center mb-4 ${styles.sectionTitle}`}>Why Choose Lazeno?</h3>
          <div className="row text-center">
            {[FaHandshake, FaStar, FaRocket, FaCogs].map((Icon, i) => (
              <div key={i} className="col-sm-6 col-lg-3 mb-4">
                <Icon className={styles.iconBox} />
                <h5 className={styles.cardTitle}>{["Client-Centric", "Creative Excellence", "Results-Driven", "Full Stack Expertise"][i]}</h5>
                <p className={styles.cardText}>{["Your goals are at the core of every solution we craft.", "We blend design with storytelling for lasting impressions.", "Focused on metrics that matter and ROI that grows.", "From content to consulting, everything under one roof."][i]}</p>
              </div>
            ))}
          </div>
        </section>

        <h3 className={`text-center mb-4 ${styles.sectionTitle}`}>Our Core Services</h3>
        <div className="container">
          <div className="row">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4 d-flex align-items-stretch">
                <div className={`text-center shadow-sm p-4 w-100 ${styles.serviceCard}`}>
                  <div className={`${styles.iconBox} mb-3`}>{service.icon}</div>
                  <h5 className={styles.cardTitle}>{service.title}</h5>
                  <p className={styles.cardText}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            {services.slice(4, 7).map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch">
                <div className={`text-center shadow-sm p-4 w-100 ${styles.serviceCard}`}>
                  <div className={`${styles.iconBox} mb-3`}>{service.icon}</div>
                  <h5 className={styles.cardTitle}>{service.title}</h5>
                  <p className={styles.cardText}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`my-5 ${styles.specializations}`}>
  <h3 className={`text-center mb-4 ${styles.sectionTitle}`}>Our Specializations</h3>
  <div className="row ">
    <div className="col-md-4 mb-4">
      
      <div className={styles.specItem}>Creative Strategy & Branding</div>
      <div className={styles.specItem}>Visual Identity Development</div>
      <div className={styles.specItem}>Campaign Planning</div>
    </div>
    <div className="col-md-4 mb-4">
     
      <div className={styles.specItem}>Social Campaign Management</div>
      <div className={styles.specItem}>Technical SEO & Analytics</div>
      <div className={styles.specItem}>Trend-based Social Insights</div>
    </div>
    <div className="col-md-4 mb-4">
  
      <div className={styles.specItem}>Multimedia Storytelling</div>
      <div className={styles.specItem}>CRM-integrated Email Marketing</div>
      <div className={styles.specItem}>Video & Motion Graphics</div>
    </div>
  </div>
</div>


    <div className={`text-center mt-5 container ${styles.testimonials}`}>
  <h3 className={`mb-4 ${styles.sectionTitle}`}>What Our Clients Say</h3>
  <Carousel interval={4000} indicators={true}>
    {testimonialChunks.map((group, idx) => (
      <Carousel.Item key={idx}>
        <div className="row justify-content-center">
          {group.map((item, i) => (
            <div className="col-lg-6 col-12 d-flex mb-3 mb-lg-0" key={i}>
              <div className={`p-4 text-start w-100 ${styles.testimonialBox}`}>
                <div className="d-flex align-items-start">
                  <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded shadow me-3"
                        style={{ maxWidth: "120px", maxHeight: "120px", objectFit: "cover" }}
                      />
                  <div>
                    <FaQuoteLeft className="text-success mb-2" size={24} />
                    <p className={styles.testimonialText}>{item.feedback}</p>
                    <p className="fw-bold mb-0">- {item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
</div>
                     
      </div>
      
      <Footer />
    </>
  );
};

export default About;
