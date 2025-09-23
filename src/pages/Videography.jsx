import React from "react";
import styles from "./Videography.module.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import {
  FaVideo,
  FaLightbulb,
  FaFilm,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";
import { CheckCircle } from "react-feather";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import videoBanner from "../assets/videography.png"; // Add banner image in assets

const Videography = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate("/contact");
  };

  const videoServices = [
    {
      icon: <FaVideo />,
      title: "Corporate Videos",
      desc: "Professional storytelling to represent your brand values and vision.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Ads",
      desc: "Unique video ads designed to attract and convert your target audience.",
    },
    {
      icon: <FaFilm />,
      title: "Event Coverage",
      desc: "Cinematic coverage of events to capture every precious moment.",
    },
    {
      icon: <FaUserTie />,
      title: "Client Testimonials",
      desc: "Real customer stories turned into powerful video testimonials.",
    },
    {
      icon: <FaChartLine />,
      title: "Promotional Campaigns",
      desc: "Video campaigns designed to generate leads and drive measurable results.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles["content-creation-container"]}>
        {/* Hero Section */}
        <section className={styles["hero-grid"]}>
          <div className={styles["hero-text"]}>
            <h1 className="fw-bold display-5 custom-heading-center">
              Videography
            </h1>
            <p>
              At <strong>LCS</strong>, we specialize in creating impactful{" "}
              <strong>videos</strong> tailored to your brand’s identity. Our
              videography team captures and produces cinematic content that
              inspires, engages, and converts your audience into loyal clients.
            </p>
            <button
              className={styles["cta-button"]}
              onClick={handleBookCall}
            >
              Book a Session
            </button>
          </div>
          <div className={styles["hero-image"]}>
            <img src={videoBanner} alt="Videography Banner" />
          </div>
        </section>

        <div className={styles["content-inner-wrapper"]}>
          {/* Strategy Carousel */}
          <section
            className={styles["strategy-carousel-section"] + " py-5"}
          >
            <h2 className="text-center mb-4">Our Videography Approach</h2>
            <p className="text-center mb-5 text-muted">
              We believe every video should tell a story and deliver results.
            </p>
            <Carousel indicators={false} interval={5000} pause="hover">
              <Carousel.Item>
                <div
                  className={
                    styles["carousel-slide"] +
                    " d-flex flex-column align-items-center text-center"
                  }
                >
                  <FaLightbulb
                    className={styles["strategy-icon"] + " mb-3"}
                  />
                  <h3>Creative Concept</h3>
                  <p>
                    We brainstorm unique concepts to align with your brand’s
                    voice and goals.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className={
                    styles["carousel-slide"] +
                    " d-flex flex-column align-items-center text-center"
                  }
                >
                  <FaFilm
                    className={styles["strategy-icon"] + " mb-3"}
                  />
                  <h3>Cinematic Shooting</h3>
                  <p>
                    Using advanced equipment to shoot videos with
                    professional-grade quality.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className={
                    styles["carousel-slide"] +
                    " d-flex flex-column align-items-center text-center"
                  }
                >
                  <FaChartLine
                    className={styles["strategy-icon"] + " mb-3"}
                  />
                  <h3>Result-Driven Editing</h3>
                  <p>
                    Our edits focus on storytelling that captivates and drives
                    measurable business growth.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </section>

          {/* Services Section */}
          <section className={styles["content-types"] + " py-5"}>
            <h2
              className={styles["section-title"] + " text-center mb-5"}
            >
              Our Videography Services
            </h2>
            <div className="row justify-content-center">
              {videoServices.map((service, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                  <div
                    className={styles["content-card"] + " shadow-sm"}
                  >
                    <div className={styles["icon-wrapper"]}>
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section
            className={styles["content-values-section"] + " py-5"}
          >
            <div className="container">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: "#008080" }}>
                  Why Choose LCS Videography?
                </h2>
                <p
                  className="text-muted"
                  style={{ color: "#666666" }}
                >
                  We combine creativity, technology, and storytelling to
                  deliver impactful results.
                </p>
              </div>

              <div className="row">
                {[
                  [
                    "Cinematic Quality",
                    "Professional cameras and tools for high-definition videos.",
                  ],
                  [
                    "Unique Storytelling",
                    "Every video is crafted with a compelling narrative.",
                  ],
                  [
                    "Experienced Team",
                    "Creative professionals ensuring perfection in every frame.",
                  ],
                  [
                    "Lead-Focused",
                    "Videos designed to engage viewers and drive conversions.",
                  ],
                ].map(([title, desc], idx) => (
                  <div
                    className="col-md-6 mb-4 d-flex"
                    key={idx}
                  >
                    <CheckCircle
                      className="text-success me-3 mt-1"
                      size={24}
                    />
                    <div>
                      <h6
                        className="mb-1 fw-semibold"
                        style={{ color: "#1c1c1c" }}
                      >
                        {title}
                      </h6>
                      <p
                        className="mb-0"
                        style={{ color: "#555" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles["content-cta"]}>
            <h2>🎥 Let’s Create Your Story</h2>
            <p>
              Transform your vision into captivating videos that connect
              with your audience.
            </p>
            <button
              className={styles["cta-button"]}
              onClick={handleBookCall}
            >
              Get Started
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Videography;
