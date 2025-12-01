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

      {/* Services Grid */}
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

      {/* How We Work */}
      <section className="process-section">
        <h2>How We Work</h2>
        <div className="process-steps">
          <div className="step">
            <h3>1. Identify the Need</h3>
            <p>
              We listen to local communities and understand their needs through
              partnerships with pastors and volunteers.
            </p>
          </div>
          <div className="step">
            <h3>2. Mobilize Resources</h3>
            <p>
              Our team gathers food, medical supplies, and other essentials
              while praying and planning each outreach.
            </p>
          </div>
          <div className="step">
            <h3>3. Serve with Compassion</h3>
            <p>
              Every program is conducted with dignity, love, and personal
              connection, ensuring people feel valued.
            </p>
          </div>
          <div className="step">
            <h3>4. Empower for the Future</h3>
            <p>
              Beyond meeting immediate needs, we focus on hope, education, and
              sustainable community growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stories of Hope */}
      <section className="stories-section">
        <h2>Stories of Hope</h2>
        <div className="story-grid">
          <div className="story">
            <p>
              “After my husband passed away, I had no support. Joseph Paul Trust
              provided me with food and faith — reminding me that God still
              cares for the brokenhearted.”
            </p>
            <h4>— Mary, Widow Beneficiary</h4>
          </div>
          <div className="story">
            <p>
              “My son was able to go back to school because of the education
              support we received. It gave our family a new beginning.”
            </p>
            <h4>— Rajesh, Single Father</h4>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div>
            <h3>Faith</h3>
            <p>We rely on God’s wisdom and guidance in all we do.</p>
          </div>
          <div>
            <h3>Compassion</h3>
            <p>Every act of service flows from genuine love and care.</p>
          </div>
          <div>
            <h3>Integrity</h3>
            <p>We remain transparent and accountable to those we serve.</p>
          </div>
          <div>
            <h3>Service</h3>
            <p>We believe serving others is the highest form of worship.</p>
          </div>
        </div>
      </section>

      {/* Volunteer Call to Action */}
      <section className="volunteer-section">
        <h2>Volunteer With Us</h2>
        <p>
          Your time, heart, and compassion can make an eternal difference. Join
          us in spreading hope and love to those in need through hands-on
          service and prayer-led outreach.
        </p>
        <button className="btn-volunteer">Join Now</button>
      </section>
    </div>
  );
}

export default Services;
