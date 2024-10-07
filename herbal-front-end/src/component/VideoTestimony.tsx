import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is installed and imported

// List of video paths
const products = [
  { id: 1, video: "./vid1.MP4" },
  { id: 2, video: "./vid2.MP4" },
  { id: 3, video: "./vid3.MP4" },
  { id: 4, video: "./vid4.MP4" },
];

function AutoPlayVid() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Show 1 video on mobile
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000, // Transition speed
    autoplaySpeed: 2000, // Delay between slides
    cssEase: "ease-in-out", // Smoother transitions
    responsive: [
      {
        breakpoint: 1024, // Tablet and lower
        settings: {
          slidesToShow: 2, // Show 2 videos on tablet
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 video on mobile
          arrows: false,  // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="slider-container p-0 m-0">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="slide-item p-0 m-0">
            <div className="bg-white rounded-lg shadow-lg max-w-xs mx-auto">
              <video
                className="w-full h-48 object-cover rounded-t-lg"
                controls // Add controls for play/pause, or remove for autoplay without controls
                muted
                autoPlay
                loop
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlayVid;
