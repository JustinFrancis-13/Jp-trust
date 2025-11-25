import React, { useEffect } from "react";
import "./Home.css";
import banner from "../assets/banner.jpg";
import missionImage from "../assets/mission.jpg";
import visionImage from "../assets/vision.jpg";

function Home() {
  // Fade-in scroll animation
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-page">
      {/* Banner */}
      <section id="home" className="banner-section">
        <img src={banner} alt="Joseph Paul Trust Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Welcome to Joseph Paul Trust</h1>
          <p>Serving humanity with faith, love & compassion</p>
        </div>
      </section>

      {/* Introduction */}
      <section id="intro" className="intro-section fade-in">
        <div className="intro-container">
          <h2>Our Introduction</h2>
          <p>
            Joseph Paul Trust was founded in 2025 by Pastor Kandi
            Anil Reddy and Pastor Rohini Reddy, the loving parents of Brother
            Kandi Joseph Paul Reddy. Guided by God’s love and blessings, they
            started the trust to help people in need and bring hope into the
            lives of the poor, widows, children, and elderly.
          </p>
          <p>
            The Trust began by providing meals to the hungry and ration to
            widows, and has grown into a mission to support communities through
            love, care, and service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="mission-vision-section fade-in">
        <div className="mission">
          <img src={missionImage} alt="Mission" className="mv-image" />
          <div className="mv-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to feed the hungry, shelter the homeless, comfort
              the widows, and care for the elderly and orphans — not just meeting
              physical needs but restoring hope in their hearts.
            </p>
            <p>
              Through consistent outreach, prayer, and community support,
              Joseph Paul Trust seeks to build a family of
              faith-filled hearts who live to make a difference.
            </p>
            <p>
              We strive to create a society where compassion replaces indifference
              and every act of love becomes a reflection of Christ’s mercy.
            </p>
          </div>
        </div>

        <div className="vision">
          <div className="mv-content">
            <h2>Our Vision</h2>
            <p>
              Our vision is to build orphanages, old-age homes, and educational
              programs that not only provide shelter and learning but also nurture
              the spirit with love and belonging.
            </p>
            <p>
              We dream of becoming a beacon of hope — a place where lives are
              transformed, communities are uplifted, and God’s light shines
              through every good work.
            </p>
            <p>
              Empowered by faith, guided by grace, and strengthened by unity, we
              envision a generation that will continue this legacy of compassion —
              carrying the message of “Serving God by Serving People.”
            </p>
          </div>
          <img src={visionImage} alt="Vision" className="mv-image" />
        </div>
      </section>
    </div>
  );
}

export default Home;
