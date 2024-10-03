

// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "tailwindcss/tailwind.css"; // Ensure Tailwind is installed and imported

// function AutoPlay() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // API Call to fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "https://backend-herbal.onrender.com/products/all",
//           {
//             withCredentials: true,
//             headers: {
//               "Cache-Control": "no-cache",
//             },
//           }
//         );
//         setProducts(response.data);
//       } catch (err) {
//         setError("Error fetching products");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1, // Show 1 image on mobile
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000, // Transition speed
//     autoplaySpeed: 2000, // Delay between slides
//     cssEase: "ease-in-out", // Smoother transitions
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet and lower
//         settings: {
//           slidesToShow: 2, // Show 2 images on tablet
//         },
//       },
//       {
//         breakpoint: 768, // Mobile
//         settings: {
//           slidesToShow: 1, // Show 1 image on mobile
//           arrows: false,  // Hide arrows on mobile
//         },
//       },
//     ],
//   };

//   if (loading) return <div>Loading products...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="slider-container p-0 m-0">
//   <Slider {...settings}>
//         {products.map((product) => (
//           <div key={product.id} className="slide-item p-0 m-0"> {/* Remove padding/margin */}
//             <div className="bg-white rounded-lg shadow-lg max-w-xs mx-auto"> {/* Ensure card width */}
//               <img
//                 className="w-full h-48 object-cover rounded-t-lg" // Increased height to 48
//                 src={product.product_image.url}
//                 alt={product.name}
//               />
//               <div className="p-2"> {/* Smaller padding inside the card */}
//                 <h3 className="text-lg font-bold mb-1">{product.name}</h3>
//                 <p className="text-gray-700 text-sm">${product.price}</p>
//                 <p className="text-xs text-gray-500 mt-1">{product.description}</p>
//               </div>
//               <div className="p-2">
//                 <button className="w-full bg-blue-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-sm">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
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
    speed: 1000,
    autoplaySpeed: 1000,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="slider-container p-4">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2 md:p-4"> {/* Adjust padding for mobile */}
            <div className="bg-white rounded-lg shadow-lg max-w-xs mx-auto md:max-w-sm"> {/* Limit width for mobile */}
              <img
                className="w-full h-36 object-cover rounded-t-lg md:h-48" // Adjust height for mobile
                src={product.product_image.url}
                alt={product.name}
              />
              <div className="p-3 md:p-4"> {/* Reduce padding for mobile */}
                <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm md:text-base">${product.price}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-2">{product.description}</p> {/* Smaller font on mobile */}
              </div>
              <div className="p-3 md:p-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
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
