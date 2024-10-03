import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is installed and imported

// List of image paths
const products = [
  { id: 1, image: "./testimony.jpg" },
  { id: 2, image: "./testimony2.jpg" },
  { id: 3, image: "./testimony3.jpg" },
  { id: 4, image: "./testimony4.jpg" },
];

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Show 1 image on mobile
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000, // Transition speed
    autoplaySpeed: 2000, // Delay between slides
    cssEase: "ease-in-out", // Smoother transitions
    responsive: [
      {
        breakpoint: 1024, // Tablet and lower
        settings: {
          slidesToShow: 2, // Show 2 images on tablet
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 image on mobile
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
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={product.image}
                alt={`Slide ${product.id}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
