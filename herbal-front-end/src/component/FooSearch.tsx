import React from "react";
import Slider from "react-slick";
import { Rate } from "antd"; // Import Ant Design's Rate component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";

function SearchResultsDisplayFoo({ results }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container p-4">
      <Slider {...settings}>
        {results.map((product) => (
          <div key={product.id} className="p-2 md:p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-xs mx-auto md:max-w-sm">
              <img
                className="w-full h-36 object-cover rounded-t-lg md:h-48"
                src={product.product_image.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image.url}`} 
                alt={product.name}
              />
              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  <TbCurrencyNaira /> {product.price}
                </p>
                <Rate disabled defaultValue={product.rating || 4} />
                <p className="text-xs md:text-sm text-gray-500 mt-2">{product.description}</p>
              </div>
              <div className="p-3 md:p-4">
                <Link
                  to={`/product/${product.id}`}
                  className="w-full bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SearchResultsDisplay;
