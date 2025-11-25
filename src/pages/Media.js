import React, { useState } from "react";
import Slider from "react-slick";
import "./Media.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Food images
import food1 from "../assets/fooddonation1.jpg";
import food2 from "../assets/fooddonation2.jpg";
import food3 from "../assets/fooddonation3.jpg";
import food4 from "../assets/fooddonation4.jpg";
import food5 from "../assets/fooddonation5.jpg";
import food6 from "../assets/fooddonation6.jpg";

// Ration images
import ration2 from "../assets/ration2.jpg";
import ration3 from "../assets/ration3.jpg";
import ration4 from "../assets/ration4.jpg";
import ration5 from "../assets/ration5.jpg";
import ration6 from "../assets/ration6.jpg";
import ration7 from "../assets/ration7.jpg";

// Events images
import events from "../assets/events.JPG";
import events1 from "../assets/events1.JPG";
import events2 from "../assets/events2.JPG";
import events3 from "../assets/events3.JPG";
import events4 from "../assets/events4.JPG";
import events5 from "../assets/events5.JPG";
import events6 from "../assets/events6.jpg";

function Media() {
  const [selectedCategory, setSelectedCategory] = useState("food");

  const foodImages = [food1, food2, food3, food4, food5, food6];
  const rationImages = [ration2, ration3, ration4, ration5, ration6, ration7];
  const eventImages = [events, events1, events2, events3, events4, events5, events6];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000, // slower for smooth motion
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const renderSlider = (images) => (
    <Slider {...settings}>
      {[...images, ...images].map((img, index) => (
        <div key={index} className="media-card">
          <img src={img} alt={`media ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="media-page">
      <h1 className="media-title">Media</h1>

      {/* Category Buttons */}
      <div className="media-buttons">
        <button
          className={selectedCategory === "food" ? "active" : ""}
          onClick={() => setSelectedCategory("food")}
        >
          Food Distribution
        </button>
        <button
          className={selectedCategory === "ration" ? "active" : ""}
          onClick={() => setSelectedCategory("ration")}
        >
          Ration Distribution
        </button>
        <button
          className={selectedCategory === "events" ? "active" : ""}
          onClick={() => setSelectedCategory("events")}
        >
          Events
        </button>
      </div>

      {/* Slider */}
      <div className="media-slider-frame">
        <div className="media-slider-container">
          {selectedCategory === "food" && renderSlider(foodImages)}
          {selectedCategory === "ration" && renderSlider(rationImages)}
          {selectedCategory === "events" && renderSlider(eventImages)}
        </div>
      </div>
    </div>
  );
}

export default Media;
