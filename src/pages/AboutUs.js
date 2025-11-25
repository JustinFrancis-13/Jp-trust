import React from "react";
import "./AboutUs.css";
import historyImage from "../assets/history.jpg";
import founderImage from "../assets/founder.jpg";
import cofounderImage from "../assets/cofounder.jpg";

function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Section 1 - About Joseph Paul Trust */}
      <section className="aboutus-intro">
        <div className="aboutus-text">
          <h1>About Joseph Paul Trust</h1>
          <p>
            Joseph Paul Trust was founded with a vision to serve
            humanity through compassion, love, and faith. Rooted in Christian
            values, we strive to uplift the poor, feed the hungry, and support
            widows, orphans, and the needy through faith-based community
            initiatives.
          </p>
        </div>
      </section>

      {/* Section 2 - History */}
      <section className="aboutus-history">
        <div className="aboutus-history-img">
          <img src={historyImage} alt="History" />
        </div>
        <div className="aboutus-history-text">
          <h2>Our Journey</h2>
          <p>
            What began as a small act of faith — feeding the poor and supporting
            widows — has grown into a movement of hope and service. Guided by
            God’s grace, our mission continues to reach hundreds of families with
            food, healthcare, and education.
          </p>
          <p>
            Today, JP Trust stands as a beacon of light, driven by love and
            compassion, bringing faith and hope to those in need.
          </p>
        </div>
      </section>

      {/* Section 3 - Founder */}
      <section className="aboutus-founder">
        <div className="aboutus-founder-img">
          <img src={founderImage} alt="Founder" />
        </div>
        <div className="aboutus-founder-text">
          <h2>Founder</h2>
          <h3>Pastor Kandi Anil Reddy</h3>
          <p>
            Pastor Kandi Anil Reddy is a servant of God with a heart full of
            compassion and an unshakable faith in Christ. Known for his humility,
            leadership, and deep concern for people in distress.
          </p>
          <p>
            He founded Joseph Paul Trust in 2025, driven by the vision
            to translate God’s love into tangible action. His passion lies in
            seeing lives transformed — not only through spiritual encouragement
            but also through practical help such as food, shelter, and emotional
            support.
          </p>
          <p>
            Beyond his pastoral calling, Pastor Anil is also a visionary leader
            who believes that true worship is found in serving others. He dreams
            of a future where the Trust will expand into orphanages, old-age
            homes, educational support, and community upliftment centers places
            that offer love, dignity, and opportunity to all.
          </p>
          <p>
            Those who know him describe him as a man of prayer, faith, and
            purpose, someone who carries a calm spirit even in challenges,
            trusting completely in God’s provision and timing. His life is a
            testimony of perseverance, compassion, and obedience to God’s call.
          </p>
        </div>
      </section>

      {/* Section 4 - Co-Founder */}
      <section className="aboutus-cofounder">
        <div className="aboutus-cofounder-text">
          <h2>Co-Founder</h2>
          <h3>Pastor Rohini Reddy</h3>
          <p>
            Pastor Rohini Reddy, the Co-Founder of Joseph Paul Trust,
            embodies grace, gentleness, and unyielding dedication to the mission
            of serving others. She has been the steady support and spiritual
            strength behind every initiative of the Trust.
          </p>
          <p>
            From organizing food drives to personally comforting widows and
            families in need, Pastor Rohini’s heart for service reflects a
            mother’s love and God’s compassion. She believes that helping one
            person in pain is equal to serving Christ Himself, and she lives out
            that belief every day through her quiet yet powerful acts of
            kindness.
          </p>
          <p>
            Looking ahead, Pastor Rohini envisions creating safe spaces for the
            vulnerable — orphaned children, widows, and the aged — where they can
            find hope, healing, and belonging. Together with her husband, she
            continues to walk faithfully, trusting God to multiply the impact of
            every small act of love.
          </p>
        </div>
        <div className="aboutus-cofounder-img">
          <img src={cofounderImage} alt="Co-Founder" />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
