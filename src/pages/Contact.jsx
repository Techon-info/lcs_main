import React, { useState } from 'react';
import styles from './sampcont.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      name,
      form_email: email,
      form_subject: subject,
      form_message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        alert("Your message has been sent successfully!");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <>
    <Navbar/>
      <div className={styles['contact-container']}>
        <h1 className={`${styles['contact-heading']} animate-fadeInDown`}>Get in Touch With Us</h1>
        <p className={`${styles['contact-subtext']} animate-fadeInUp`}>
          Ready to elevate your brand's social presence? Whether you're a startup or a well-established business, we’re here to craft a strategy that fits your goals.
        </p>

        <div className={styles['contact-content']}>
          <div className={`${styles['contact-form']} animate-fadeInLeft`}>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
              <textarea rows="5" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              <button type="submit" className={styles['contact-btn']}>Send Message</button>
            </form>
          </div>

          <div className={`${styles['contact-timeline']} animate-fadeInRight`}>
            <div className={styles.line}></div>
            <div className={styles['timeline-item']}>
              <div className={styles.dot}>1</div>
              <h4>Reach Out</h4>
              <p>Send us a message through the contact form or email.</p>
            </div>
            <div className={styles['timeline-item']}>
              <div className={styles.dot}>2</div>
              <h4>Strategy Call</h4>
              <p>We’ll schedule a consultation to understand your needs.</p>
            </div>
            <div className={styles['timeline-item']}>
              <div className={styles.dot}>3</div>
              <h4>Kickstart</h4>
              <p>Our team gets to work creating impactful social campaigns.</p>
            </div>
            <div className={styles['timeline-arrow']}>➤</div>

            <div className={styles['contact-info']}>
              <h4>Contact Info</h4>
              <p>📍 151 A, SIFA TOWER, Karupparayan Kovil, Kurichi, Podanur, Coimbatore</p>
              <p>📧 lazenocons01@gmail.com</p>
              <p>📞 +91 7604889478</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
