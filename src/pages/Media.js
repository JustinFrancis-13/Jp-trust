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

// Videos (example imports, replace with your own video paths)
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

function Media() {
  const [selectedCategory, setSelectedCategory] = useState("food");

  const foodImages = [food1, food2, food3, food4, food5, food6];
  const rationImages = [ration2, ration3, ration4, ration5, ration6, ration7];
  const eventImages = [events, events1, events2, events3, events4, events5, events6];

  // Add your videos here
  const videos = [video1, video2, video3];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const renderSliderImages = (images) => (
    <Slider {...settings}>
      {[...images, ...images].map((img, index) => (
        <div key={index} className="media-card">
          <img src={img} alt={`media ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );

  const renderSliderVideos = (videos) => (
    <Slider {...settings}>
      {[...videos, ...videos].map((vid, index) => (
        <div key={index} className="video-card">
          <video
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false} // remove if you want controls visible
            className="video-short"
          />
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
        <button
          className={selectedCategory === "videos" ? "active" : ""}
          onClick={() => setSelectedCategory("videos")}
        >
          Videos
        </button>
      </div>

      <div className="media-slider-frame">
        <div className="media-slider-container">
          {selectedCategory === "food" && renderSliderImages(foodImages)}
          {selectedCategory === "ration" && renderSliderImages(rationImages)}
          {selectedCategory === "events" && renderSliderImages(eventImages)}
          {selectedCategory === "videos" && renderSliderVideos(videos)}
        </div>
      </div>
    </div>
  );
}

export default Media;
