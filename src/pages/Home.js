import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Home.css";

import banner from "../assets/banner.jpg";
import visionImage from "../assets/vision.jpg";
import projectImage from "../assets/project.jpg";
import volunteerImage from "../assets/volunteer.jpg";

const Home = () => {
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is in view
    );
    fadeEls.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-page">
     
      
      <section className="hero-section">
        <section className="hero-section fade-in">
  <div className="hero-bg">
    <img src={banner} alt="Helping Hands" />
  </div>

  <div className="hero-overlay">
    <div className="hero-content">
      <p>DONATE TO CONTRIBUTE</p>
      <h1>Serving Humanity with <span>Faith & Compassion</span></h1>
      <p>
        Joseph Paul Trust empowers the needy through food, shelter, education, and community support 
        programs that uplift lives. Our mission is to bring hope, comfort, and opportunities 
        to the underserved, fostering self-reliance and dignity.
      </p>
      <p>
        Through our initiatives, we meet immediate needs and invest in long-term growth 
        by providing skill-building, healthcare, and educational support.
        <br>
        </br>
      <div className="bible-quote">
        <blockquote>
        <p>
          “For I know the plans I have for you,”  
          <span className="highlight"> declares the Lord,</span><br />
          “plans to prosper you and not to harm you, <br />
          plans to give you hope and a future.”
        </p>
        <footer>— <cite>Jeremiah 29:11</cite></footer>
      </blockquote>
      </div>

      </p>
      <Link to="/donate" className="dnte-btn">❤️ Donate Now</Link>
    </div>
  </div>
</section>

      </section>

      {/* INTRO SECTION */}
      <section className="intro-section fade-in">
        <h2>Transforming Lives, One Act at a Time</h2>
        <p>
          Founded by Pastor Kandi Anil Reddy and Pastor Rohini Reddy, our trust spreads love, hope, and care through sustainable programs supporting widows, children, the elderly, and underserved communities. Every initiative is designed to uplift lives and create opportunities for education, healthcare, and personal growth. We work closely with local volunteers and donors to maximize the reach of our programs. Compassion drives every decision, ensuring no one is left behind.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section fade-in">
        <h2>Our Key Programs</h2>
        <p>
          At Joseph Paul Trust, we run a variety of initiatives aimed at tackling poverty, hunger, and educational inequality. Each program is thoughtfully designed to address the most pressing needs of our communities. Volunteers and donors are actively involved, helping us expand our outreach. Sustainability and long-term impact are central to all our projects, ensuring lives are transformed for the better.
        </p>
        <div className="projects-grid">
          <div className="project-card zoom-in">
            <LazyLoadImage src={projectImage} alt="Food distribution" effect="blur"/>
            <h3>Food & Ration Distribution</h3>
            <p>
              Daily meals and essential supplies are provided to families in need. This program ensures no child goes hungry and no family struggles for basic necessities. We collaborate with local communities to identify those most in need and distribute supplies fairly. Nutrition and quality are our priorities.
            </p>
          </div>
          <div className="project-card zoom-in">
            <LazyLoadImage src={volunteerImage} alt="Education program" effect="blur"/>
            <h3>Education & Skill Training</h3>
            <p>
              Empowering children and adults with education and practical skills is vital for building a brighter future. We provide classes, workshops, and mentorship to enhance knowledge and employment opportunities. Literacy, digital skills, and vocational training help individuals become self-reliant. Education opens doors and transforms entire communities.
            </p>
          </div>
          <div className="project-card zoom-in">
            <LazyLoadImage src={visionImage} alt="Health programs" effect="blur"/>
            <h3>Health & Wellness Camps</h3>
            <p>
              Regular medical checkups, wellness programs, and health awareness sessions ensure that underserved communities remain healthy. Our team organizes free camps with doctors, nurses, and volunteers. We focus on preventive care, hygiene, and nutrition to reduce disease and improve overall well-being. Accessible healthcare is a fundamental right we aim to provide.
            </p>
          </div>
        </div>
      </section>

      <section className="impact-section fade-in">
        <h2>Your Impact</h2>
        <p>
          Every donation and volunteer effort contributes to tangible change. Through your support, thousands of lives are touched, meals are served, children educated, and families strengthened. Transparency and accountability guide our operations to ensure your contribution reaches where it’s most needed. Together, we create a ripple effect of hope and transformation.
        </p>
        <div className="impact-stats">
          <div className="impact-card"><h3>5,000+</h3><p>Meals Served</p></div>
          <div className="impact-card"><h3>300+</h3><p>Families Supported</p></div>
          <div className="impact-card"><h3>100%</h3><p>Transparent Donations</p></div>
        </div>
      </section>

      <section className="testimonials-section fade-in">
        <h2>What People Say</h2>
        <p>
          Our programs have touched many lives, bringing hope and opportunity. Here are some voices from the communities we serve, sharing their experiences and the difference our initiatives have made. Real stories that inspire action and foster belief in the power of collective compassion. We remain committed to creating more such success stories.
        </p>
        <div className="testimonials-grid">
          <div className="testimonial-card zoom-in">
            <p>
              "Thanks to Joseph Paul Trust, our family received meals and support when we needed it most. The care and attention from the volunteers made a real difference in our lives, bringing hope and comfort during difficult times."
            </p>
            <h4>- Justin K.</h4>
          </div>
          <div className="testimonial-card zoom-in">
            <p>
              "The education program helped my kids get back to school and feel hopeful again. With access to learning materials and supportive mentors, their confidence has grown significantly, giving them a chance for a better future."
            </p>
            <h4>- Suchit</h4>
          </div>
        </div>
      </section>

 
      <section className="cta-section fade-in">
        <h2>Be the Change Today</h2>
        <p>
          Your donation can bring hope, food, and shelter to those in need. Every contribution helps us reach more communities and extend our programs. Join hands with Joseph Paul Trust and make a lasting impact. Together, we can transform lives and build stronger, healthier, and educated communities.
        </p>
        <Link to="/donate" className="cta-btn">Donate Now</Link>
      </section>

      <section className="faq-section fade-in">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I donate?</h3>
          <p>You can donate directly on our website through secure payment methods like credit/debit card or UPI. Every contribution counts and makes a difference.</p>
        </div>
        <div className="faq-item">
          <h3>Where does my donation go?</h3>
          <p>Your donation supports our food, shelter, education, and community outreach programs. We ensure full transparency in the utilization of funds for the welfare of the underserved.</p>
        </div>
        <div className="faq-item">
          <h3>How can I get involved?</h3>
          <p>You can get involved by donating, volunteering, or spreading awareness about our programs. Your support helps us reach more people in need.</p>
        </div>
        <div className="faq-item">
          <h3>How does Joseph Paul Trust ensure transparency?</h3>
          <p>We provide regular updates to our donors and volunteers. Our financial statements and annual reports are available for public review to ensure full transparency and accountability in all our programs.</p>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="map-section fade-in">
        <h2>Our Global Impact</h2>
        <p>
          See where we've made a difference. Our impact spans across multiple regions, supporting communities in need.
        </p>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.8204505012373!2d78.589659!3d17.50144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d0055195a8b%3A0x1f1b275256ae7bf8!2sJCFM%20Church!5e0!3m2!1sen!2sus!4v1764273727256!5m2!1sen!2sus"  
            width="100%"
            height="500"
            style={{ border: 0 }} 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer fade-in">
        <div className="footer-container">
          <div className="social-links">
            <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/YourPage" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/YourPage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
