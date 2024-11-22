import React from "react";
import "../styles.css";

const Services = () => {
  const services = [
    { title: "Manufacturing roofing materials", image: "../img/roof-replacement.jpg" },
    { title: "Roof Installation", image: "../img/metal-roofing.jpg" },
    { title: "Roof Replacement", image: "../img/roof-installation.jpg" },
    { title: "Delivery services", image: "../img/delivery.jpg" }, 
    
    // Add more services
  ];

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="container">
        {services.map((service, index) => (
          <div className="item" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
