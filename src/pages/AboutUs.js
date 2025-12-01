import React from "react";
import "./AboutUs.css";
import historyImage from "../assets/history.jpg";
import founderImage from "../assets/founder.jpg";
import cofounderImage from "../assets/cofounder.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import volunteerImage from "../assets/volunteer.jpg";

import Timeline from "./Timeline";

function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Intro */}
      <section className="aboutus-intro">
        <h1>About Joseph Paul Trust</h1>
        <p>
          Joseph Paul Trust exists to reflect the love of Christ through action.
          What began as a small outreach has now become a growing faith movement
          that brings food, hope, and healing to those in need.
        </p>
      </section>

      {/* Behind the Name */}
      <section className="aboutus-name">
        <h2>Behind the Name</h2>
        <p>
          The name “Joseph Paul” symbolizes two biblical pillars — Joseph’s
          faithfulness in adversity and Paul’s unwavering mission to spread the
          Gospel. Together, they embody our purpose: to serve faithfully and
          love unconditionally.
        </p>
      </section>

      {/* Our Journey */}
      <section className="aboutus-history">
        <div className="aboutus-history-img">
          <img src={historyImage} alt="Our Journey" />
        </div>
        <div className="aboutus-history-text">
          <h2>Our Journey of Faith</h2>
          <p>
            Starting from humble beginnings in a small village, the Trust began
            by feeding just a few families. With time, support grew, and so did
            our mission — now touching hundreds through food, education, and
            prayer ministries.
          </p>
          <p>
            Through every challenge, we’ve seen God’s faithfulness shape our
            story — step by step, miracle by miracle.
          </p>
        </div>
      </section>



      {/* Founders */}
      <section className="aboutus-founder">
        <div className="aboutus-founder-img">
          <img src={founderImage} alt="Founder" />
        </div>
        <div className="aboutus-founder-text">
          <h2>Founder</h2>
          <h3>Pastor Kandi Anil Reddy</h3>
     <p>
  Pastor Kandi Anil Reddy is a servant leader whose heart beats for God’s
  people. From his early years, he carried a deep burden to uplift the
  broken, feed the hungry, and comfort the hopeless. His ministry journey
  began with small acts of faith — visiting widows, praying for the sick,
  and supporting families in crisis — which soon grew into a vision far
  greater than himself.
</p>
<p>
  Under his leadership, Joseph Paul Trust was founded in obedience to
  God’s call to “love not in word, but in deed.” Pastor Anil’s focus has
  always been on action born from compassion, ensuring every outreach is
  rooted in prayer and every helping hand reflects Christ’s love.
  Beyond preaching, he mentors young believers, leads faith seminars,
  organizes community prayers, and encourages others to serve as the
  hands and feet of Jesus.
</p>
<p>
  Pastor Anil continues to inspire those around him through humility,
  perseverance, and complete dependence on God’s grace — believing that
  true ministry is not about fame, but about faithful service.
</p>

        </div>
      </section>

      <section className="aboutus-cofounder">
        <div className="aboutus-cofounder-text">
          <h2>Co-Founder</h2>
          <h3>Pastor Rohini Reddy</h3>
            <p>
  Pastor Rohini Reddy stands as a pillar of grace beside her husband,
  sharing his vision and carrying the same burden for the brokenhearted.
  Her gentle leadership has touched countless lives — especially widows,
  mothers, and young girls who find comfort and hope through her ministry.
</p>
<p>
  She plays a vital role in shaping the Trust’s humanitarian programs,
  overseeing women’s prayer fellowships, feeding drives, and personal
  counseling for those facing emotional or spiritual pain. Her heart for
  service reflects a rare combination of strength and tenderness.
  Pastor Rohini often says, “Every meal shared in love is a message of
  Christ.” 
</p>
<p>
  She also leads training programs for young women, encouraging them to
  step forward in faith, education, and leadership. Her desire is to see
  generations of women rise in dignity and hope, becoming instruments of
  God’s mercy wherever they go.
</p>

        </div>
        <div className="aboutus-cofounder-img">
          <img src={cofounderImage} alt="Co-Founder" />
        </div>
      </section>
 

 
      {/* Timeline */}
      <Timeline />

      {/* How We Serve */}
      <section className="aboutus-services">
        <h2>How We Serve</h2>
        <div className="service-grid">
          <div className="service-item">
            <img src={service1} alt="Feeding Programs" />
            <h3>Feeding Programs</h3>
            <p>
              Providing nutritious meals to widows, children, and homeless
              families.
            </p>
          </div>
          <div className="service-item">
            <img src={service2} alt="Education" />
            <h3>Education</h3>
            <p>
              Supporting children’s education with school supplies and tuition
              aid.
            </p>
          </div>
          <div className="service-item">
            <img src={service3} alt="Healthcare" />
            <h3>Healthcare</h3>
            <p>
              Free medical camps and health awareness programs for rural
              communities.
            </p>
          </div>
        </div>
      </section>  

      {/* Volunteers */}
      <section className="aboutus-volunteer">
        <div className="volunteer-content">
          <h2>Meet Our Volunteers</h2>
          <p>
            Behind every outreach stands a family of dedicated volunteers who
            serve with joy and humility. From distributing food to comforting
            the sick, they are the hands and feet of Christ in action.
          </p>
          <img src={volunteerImage} alt="Volunteers" />
        </div>
      </section>

      <section className="aboutus-future">
        <h2>Looking Ahead</h2>
        <p>
          In the coming years, we plan to establish orphan care centers, expand
          medical outreach, and launch skill training for youth. Every vision
          starts with faith — and faith keeps us moving forward.
        </p>
      </section>

      {/* Scripture */}
      <section className="aboutus-verse">
        <blockquote>
          “Whoever is kind to the poor lends to the Lord, and He will reward
          them for what they have done.” — Proverbs 19:17
        </blockquote>
      </section>
    </div>
  );
}

export default AboutUs;
