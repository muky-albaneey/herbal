// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// function AutoPlay() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default AutoPlay;
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is installed and imported

function AutoPlay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Call to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://backend-herbal.onrender.com/products/all",
          {
            withCredentials: true,
            headers: {
              "Cache-Control": "no-cache",
            },
          }
        );
        setProducts(response.data);
      } catch (err) {
        setError("Error fetching products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and lower
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={product.product_image.url}
                alt={product.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="p-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
