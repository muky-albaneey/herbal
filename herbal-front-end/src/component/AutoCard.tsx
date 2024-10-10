// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { Rate } from "antd"; // Import Ant Design's Rate component
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "tailwindcss/tailwind.css";
// import "antd/dist/reset.css"; // Import Ant Design styles
// import { Link } from "react-router-dom";
// import { TbCurrencyNaira } from "react-icons/tb";

// function AutoPlay() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const sliderRef = React.useRef(null); // Ref to access the slider instance

//   // API Call to fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "https://backend-herbal.onrender.com/products/all/desc",
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
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 10000,
//     cssEase: "linear",
//     pauseOnHover: true, // Automatically pause when hovering on the card
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet and lower
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768, // Mobile
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const handleMouseEnter = () => {
//     sliderRef.current.slickPause(); // Pause the slider when hovering
//   };

//   const handleMouseLeave = () => {
//     sliderRef.current.slickPlay(); // Resume the slider when not hovering
//   };

//   if (loading) return <div>
//      <div className="spinner-grow text-primary" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-secondary" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-success" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-danger" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-warning" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-info" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-light" role="status">
//       <span className="visually-hidden">Loading...</span>
//       </div>
//       <div className="spinner-grow text-dark" role="status">
//       <span className="visually-hidden">Loading...</span>
//   </div>
//   </div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="slider-container p-4">
//       <Slider ref={sliderRef} {...settings}>
//         {products.map((product) => (
//           <div 
//             key={product.id} 
//             className="p-2 md:p-4" 
//             onMouseEnter={handleMouseEnter} 
//             onMouseLeave={handleMouseLeave} // Stop and resume slider when hovering over a card
//           > 
//             <div className="bg-white rounded-lg shadow-lg max-w-xs mx-auto md:max-w-sm"> {/* Limit width for mobile */}
//               <img
              
//                 className="w-full h-36 object-cover rounded-t-lg md:h-48" // Adjust height for mobile
//                 // src={product.product_image.url}
//                 src={product.product_image.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image.url}`} 
//                 alt={product.name}
//               />
//               <div className="p-3 md:p-4"> {/* Reduce padding for mobile */}
//                 <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
//                 <p className="text-gray-700 text-sm md:text-base flex" style={{ display:'flex', justifyContent:'start', alignItems:'center' }}><TbCurrencyNaira />{product.price}</p>
//                 <Rate disabled defaultValue={product.rating || 4} /> {/* Display rating stars */}
//                 <p className="text-xs md:text-sm text-gray-500 mt-2">{product.description}</p> {/* Smaller font on mobile */}
//               </div>
//               <div className="p-3 md:p-4">
//                 <Link to={`/product/${product.id}`} className="w-full bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
//                   Add to Cart
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default AutoPlay;
import React from 'react';
import { ImCart } from "react-icons/im";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residence.css';
import { sliderSettings } from '../utills/common';
import { Card, Rate } from 'antd'; // Import Rate from Ant Design
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TbCurrencyNaira } from 'react-icons/tb';

export type ProductImage = {
  id: string;
  name: string;
  url: string;
  ext: string;
};

export type User = {
  id: string;
  full_name: string;
  email: string;
  phone_num: string | null;
  password: string;
  location: string | null;
  rememberToken: string | null;
  role: string;
  profile_image: string | null;
};

export type Product = {
  id: string;
  name: string;
  price: string;  // Price is a string in your response
  quantity: string;  // Quantity is a string in your response
  category: string;
  description: string;
  product_image: ProductImage;  // Nested object for product image details
  user: User;  // Nested object for user details
  createdAt: string;  // ISO date string
  rating: number;  // Add rating field for product
};

const Residence = React.memo(({ message }) => {

  const SliderButtons = () => {
    const swiper = useSwiper(); 
        return (
            <div className={message.popular === true ? 'r-button' : 'r-buttons'}>
                <button onClick={() => swiper.slidePrev()}>&lt;</button>
                <button onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        );
    };

    const [products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://backend-herbal.onrender.com/products/all', {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
            },
          });
          setProducts(response.data);
        } catch (err) {
          setError('Error fetching products');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    if (loading && message.side === "one") return (
      <div>
        <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
      </div>
    );
    
    if (loading) return <div>
       <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
    </div>;
    if (error) return <div>{error}</div>;

    // Check if there are no products available
    if (products.length === 0) {
      return <div>
          <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
      </div>;
    }

    return (
        <section className="r-wrapper">
            <div className="r-container">
                <Swiper {...sliderSettings}>
                    {products.map((card, i) => (
                        <SwiperSlide key={i}>
                           <Link to={`product/${card.id}`} style={{ textDecoration:'none' }}>
                           <div className="flexColStart r-card">
                                <Card
                                    hoverable
                                    className='cardCon'
                                    cover={
                                        <img 
                                          src={card.product_image.url.startsWith('https://') ? card.product_image.url : `https://${card.product_image.url}`} 
                                          alt={card.id} 
                                          loading="lazy" 
                                        />
                                    }
                                >
                                    <div className="cardItemInfo">
                                      <article>
                                        <h4 style={{ width:'100%', textAlign:'left' }}>
                                          <span >{card.name}</span> <br />
                                          <span style={{ display:'flex', justifyContent:'start', alignItems:'center' }}><TbCurrencyNaira />{card.price}</span>
                                        </h4>
                                        {/* Add Rating below the product name and price */}
                                        <Rate disabled defaultValue={card.rating || 4} /> 
                                      </article>
                                      <div className="add-to-cart">
                                        <ImCart />
                                      </div>
                                    </div>
                                </Card>
                            </div>
                           </Link>
                        </SwiperSlide>
                    ))}
                    <SliderButtons side={message.popular}/> 
                </Swiper>
            </div>
        </section>
    );
});

export default Residence;
