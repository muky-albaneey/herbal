// import React from 'react';
// import { ImCart } from 'react-icons/im';
// import { TbCurrencyNaira } from 'react-icons/tb';
// import { Link, useOutletContext } from 'react-router-dom';
// import '../pages/product/product.css';
// function SearchResults() {
//   const { searchResults } = useOutletContext();
//   const handleAddToCart = (product) => {
//     console.log(`Added ${product.name} to cart.`);
//     // Add the logic to handle adding to the cart
// };
//   return (
//     <div>
    
//       {searchResults.length === 0 ?'' : (
//         <ul>
//           {searchResults.map((product) => (
//             // <li key={item.id}>{item.name}</li>
//             <Link to={`/product/${product.id}`} key={product.id} id='listCon'>
//             {/* <div className="flexColStart r-card"> */}
//                 <img 
//                     src={product.product_image?.url.startsWith('https') 
//                         ? product.product_image.url 
//                         : `https://${product.product_image?.url}`} 
//                     alt={product.name} 
//                     loading="lazy" 
//                 />
//                 <div className="list__info">
//                     <article>
                        
//                             <span>{product.name}</span> <br />

                    
//                     </article>
//                     <div className="add_list_cart">
//                         <button onClick={(e) => {
//                             e.preventDefault(); // Prevent navigation when adding to cart
//                             handleAddToCart(product);
//                         }}>
//                             <h4 > <span><TbCurrencyNaira />{product.price}</span></h4>
//                             <div>
//                                 Add to Cart 
//                                 <span className="circle_cart">
//                             <ImCart /></span>
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//             {/* </div> */}
//         </Link>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchResults;
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Rate } from "antd"; // Import Ant Design's Rate component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import "antd/dist/reset.css"; // Import Ant Design styles
import { Link, useOutletContext } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { ImCart } from "react-icons/im";

function SearchResults() {
  const { searchResults } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = React.useRef(null); // Ref to access the slider instance

  useEffect(() => {
    // If needed, fetch additional data here
    setLoading(false); // Set loading to false after initial setup
  }, [searchResults]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set to false for search results
    speed: 1000,
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

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart.`);
    // Add the logic to handle adding to the cart
  };

  if (loading) return <div>Loading search results...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="slider-container p-4">
      {searchResults.length === 0 ? (
        <div>No results found</div>
      ) : (
        <Slider ref={sliderRef} {...settings}>
          {searchResults.map((product) => (
            <div key={product.id} className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-lg max-w-xs mx-auto md:max-w-sm">
                <Link to={`/product/${product.id}`}>
                  <img
                    className="w-full h-36 object-cover rounded-t-lg md:h-48"
                    src={product.product_image?.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image?.url}`}
                    alt={product.name}
                  />
                  <div className="p-3 md:p-4">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-700 text-sm md:text-base"><TbCurrencyNaira />{product.price}</p>
                    <Rate disabled defaultValue={product.rating || 4} />
                    <p className="text-xs md:text-sm text-gray-500 mt-2">{product.description}</p>
                  </div>
                </Link>
                <div className="p-3 md:p-4">
                  <button onClick={() => handleAddToCart(product)} className="w-full bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
                    Add to Cart <span className="circle_cart"><ImCart /></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SearchResults;
