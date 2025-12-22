import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner from "../assets/banner.jpg";
import visionImage from "../assets/vision.jpg";
import projectImage from "../assets/project.jpg";
import volunteerImage from "../assets/volunteer.jpg";
import impactImage from "../assets/imapact.jpg";

const Home = () => {
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    fadeEls.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-page">

      <section className="hero-section fade-in">
        <div className="hero-bg">
          <img src={banner} alt="Helping Hands" />
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <p>DONATE TO CONTRIBUTE</p>
            <h1>
              Serving Humanity with <span>Faith & Compassion</span>
            </h1>
            <p>
              Joseph Paul Trust empowers the needy through food, shelter,
              education, and community support programs that uplift lives.
            </p>
            <p>
              Through our initiatives, we meet immediate needs and invest in
              long-term growth by providing skill-building, healthcare, and
              educational support.
            </p>
            <div className="bible-quote">
              <blockquote>
                <p>
                  “For I know the plans I have for you,”{" "}
                  <span className="highlight">declares the Lord,</span>
                  <br />
                  “plans to prosper you and not to harm you, <br />
                  plans to give you hope and a future.”
                </p>
                <footer>— <cite>Jeremiah 29:11</cite></footer>
              </blockquote>
            </div>
            <Link to="/donate" className="dnte-btn">❤️ Donate Now</Link>
          </div>
        </div>
      </section>

      <section className="intro-section fade-in">
        <h2>Transforming Lives, One Act at a Time</h2>
        <p>
          Founded by Pastor Kandi Anil Reddy and Pastor Rohini Reddy, our trust
          spreads love, hope, and care through sustainable programs supporting
          widows, children, the elderly, and underserved communities.
        </p>
      </section>

      <section className="projects-section fade-in">
        <h2>Our Key Programs</h2>
        <p>
          At Joseph Paul Trust, we run initiatives tackling poverty, hunger, and
          educational inequality. Each program is designed for long-term impact.
        </p>
        <div className="projects-grid">
          <div className="project-card zoom-in">
            <LazyLoadImage src={projectImage} alt="Food distribution" effect="blur" />
            <h3>Food & Ration Distribution</h3>
            <p>Daily meals and essential supplies are provided to families in need.</p>
          </div>
          <div className="project-card zoom-in">
            <LazyLoadImage src={volunteerImage} alt="Education program" effect="blur" />
            <h3>Education & Skill Training</h3>
            <p>Empowering children and adults with education and practical skills.</p>
          </div>
          <div className="project-card zoom-in">
            <LazyLoadImage src={visionImage} alt="Health programs" effect="blur" />
            <h3>Health & Wellness Camps</h3>
            <p>Medical checkups and wellness programs ensure healthier communities.</p>
          </div>
        </div>
      </section>

      <section className="impact-section fade-in">
        <div className="impact-container">
          <div className="impact-image">
            <img src={impactImage} alt="Smiling children" />
            <div className="impact-stats-bar">
              <div className="stat"><h3>5k+</h3><p>Served</p></div>
              <div className="stat"><h3>1500</h3><p>Donations</p></div>
              <div className="stat"><h3>20</h3><p>Widow Provisions</p></div>
              <div className="stat"><h3>40</h3><p>Meals per day</p></div>
            </div>
          </div>
          <div className="impact-text">
            <h5>YOUR IMPACT</h5>
            <h2>Our Work Promise To Uphold The Trust Placed</h2>
            <p>
              We are committed to transforming lives with faith and compassion.
              Through our initiatives, we strive to feed the hungry, educate
              children, and empower communities to thrive with dignity and hope.
            </p>
            <ul>
              <li><i className="fas fa-check"></i> Empowering communities through compassion.</li>
              <li><i className="fas fa-check"></i> Supporting education and skill growth.</li>
              <li><i className="fas fa-check"></i> Providing healthcare and food security.</li>
              <li><i className="fas fa-check"></i> Building self-reliance and sustainability.</li>
            </ul>
            <div className="experience-box">
              <h3>10</h3>
              <p>Years<br />of Experience</p>
            </div>
            <Link to="/about" className="learn-btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="stories-section fade-in">
        <h2>Stories That Inspire</h2>
        <p>Real voices. Real lives. See how faith and compassion transform communities across the world.</p>
        <div className="stories-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <div className="story-slide">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80" alt="Story 1" />
                <div className="story-text">
                  <h4>Khushboo, Mission Education Centre - Bihar</h4>
                  <p>
                    “My parents were never able to give me a hunger-free day. I couldn't go to school because of discrimination.
                    Now, I ensure my daughter studies and never gives up, no matter how hard life gets.”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="story-slide">
                <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=600&q=80" alt="Story 2" />
                <div className="story-text">
                  <h4>Ravi, Skill Development Program - Hyderabad</h4>
                  <p>
                    “I was jobless for years, but the skill workshops from Joseph Paul Trust helped me learn tailoring.
                    Today, I run a small shop and support my family with pride.”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="story-slide">
                <img src="https://images.unsplash.com/photo-1581578017429-535be3613a92?auto=format&fit=crop&w=600&q=80" alt="Story 3" />
                <div className="story-text">
                  <h4>Anita, Health Camp Beneficiary - Telangana</h4>
                  <p>
                    “I received free health checkups and medicines when I had no access to hospitals.
                    The kindness of the volunteers truly changed my life.”
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="cta-section fade-in">
        <h2>Be the Change Today</h2>
        <p>
          Your donation can bring hope, food, and shelter to those in need. Join
          hands with Joseph Paul Trust and make a lasting impact.
        </p>
        <Link to="/donate" className="cta-btn">Donate Now</Link>
      </section>

      <section className="faq-section fade-in">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-card zoom-in">
            <i className="fas fa-donate"></i>
            <h3>How can I donate?</h3>
            <p>You can donate directly on our website through secure methods like UPI or card.</p>
          </div>
          <div className="faq-card zoom-in">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Where does my donation go?</h3>
            <p>Your donation supports food, shelter, education, and outreach programs.</p>
          </div>
          <div className="faq-card zoom-in">
            <i className="fas fa-users"></i>
            <h3>How can I get involved?</h3>
            <p>You can volunteer, donate, or spread awareness about our initiatives.</p>
          </div>
          <div className="faq-card zoom-in">
            <i className="fas fa-clipboard-check"></i>
            <h3>How does JPT ensure transparency?</h3>
            <p>We share regular updates and reports with donors and volunteers.</p>
          </div>
        </div>
      </section>

      <section className="map-section fade-in">
        <h2>Our Global Impact</h2>
        <p>See where we've made a difference. Our impact spans across multiple regions, supporting communities in need.</p>
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

      <footer className="footer fade-in">
        <div className="footer-container">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
