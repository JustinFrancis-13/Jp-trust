import React from "react";
import "./Services.css";
import foodDonation from "../assets/fooddonation.jpg";
import ration from "../assets/ration.jpg";
import healthcare from "../assets/healthcare.jpg";
import adoption from "../assets/adoption.jpg";

function Services() {
  const services = [
    {
      title: "Food Donation",
      image: foodDonation,
      description:
        "We organize regular food drives and community kitchens to ensure no one goes hungry. Thousands are served every month through our outreach programs.",
    },
    {
      title: "Helping Widows",
      image: ration,
      description:
        "Through our Ration Distribution Program, we support widows and underprivileged families with essential groceries and monthly food supplies.",
    },
    {
      title: "Health Care",
      image: healthcare,
      description:
        "Our medical camps provide free health check-ups, medicines, and awareness sessions to help communities maintain physical and mental well-being.",
    },
    {
      title: "Adoption Support",
      image: adoption,
      description:
        "We help connect loving families with orphaned children, ensuring they receive the care, education, and love they deserve through adoption awareness initiatives.",
    },
  ];

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        At Joseph Paul Trust, we are dedicated to bringing hope and healing
        through faith and compassion. Each of our services reflects our mission
        to uplift and care for those in need.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-frame">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
