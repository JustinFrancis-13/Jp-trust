import React, { useEffect } from "react";
import "./Timeline.css";

function Timeline() {
  const events = [
    {
      year: "2020",
      title: "First Outreach",
      description:
        "We began by serving 25 meals to widows and orphans in our local village.",
    },
    {
      year: "2022",
      title: "Education Program",
      description:
        "Launched ‘Light of Hope’ to provide school supplies and mentoring to children.",
    },
    {
      year: "2024",
      title: "Medical Camps",
      description:
        "Started free healthcare camps across 5 villages to support families in need.",
    },
    {
      year: "2025",
      title: "Official Registration",
      description:
        "Joseph Paul Trust became a registered organization — expanding our mission nationwide.",
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const reveal = () => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section className="timeline-section">
      <h2>Faith in Action — Our Milestones</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            key={event.year}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
