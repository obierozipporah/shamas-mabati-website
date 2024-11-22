import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-row">
          <div className="greeting">
            <h2>Contact Us</h2>
            <p>Reach out for any inquiries or quotes.</p>
          </div>
          <div className="contact-method">
            <h4>Contact Options</h4>
            <p>
              <a href="dorothyhilderbrant@gmail.com" className="contact-link">Email me: dorothyhilderbrant@gmail.com</a>
            </p>
            <p>
          <a href="tel:+12345678900" className="contact-link">Call me: +1 (234) 567-8900</a>
        </p>
        <p>
          <a href="https://wa.me/12345678900" className="contact-link" target="_blank" rel="noopener noreferrer">
            Contact me on WhatsApp
          </a>
        </p>
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
