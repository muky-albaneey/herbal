// import React from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/css';
// import './residence.css';
// import { sliderSettings } from '../utills/common';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export type ProductImage = {
//   id: string;
//   name: string;
//   url: string;
//   ext: string;
// };

// export type User = {
//   id: string;
//   full_name: string;
//   email: string;
//   phone_num: string | null;
//   password: string;
//   location: string | null;
//   rememberToken: string | null;
//   role: string;
//   profile_image: string | null;
// };

// export type Product = {
//   id: string;
//   name: string;
//   price: string;  // Price is a string in your response
//   quantity: string;  // Quantity is a string in your response
//   category: string;
//   description: string;
//   product_image: ProductImage;  // Nested object for product image details
//   user: User;  // Nested object for user details
//   createdAt: string;  // ISO date string
// };


// const products =[
//   './testimony.jpg',
//   './testimony2.jpg',
//   './testimony3.jpg',
//   './testimony4.jpg'
// ]

// const TestimonyComponent = React.memo(() => {

//   const SliderButtons = () => {
    
//     const swiper = useSwiper(); 
//         return (
//             <div className='r-buttons'>
//                 <button onClick={() => swiper.slidePrev()} >&lt;</button>
//                 <button onClick={() => swiper.slideNext()}>&gt;</button>
//             </div>
//         );
//     };

//     return (
//         <section className="r-wrapper">
//             <div className="r-container">
//                 <Swiper {...sliderSettings}>
//                     {products.map((card, i) => (
//                         <SwiperSlide key={i}>
//                            <Link to='#' style={{ textDecoration:'none' }}>
//                            <div className="flexColStart r-card">
//                                 <Card
//                                     hoverable
//                                     className='cardCon'
//                                     id='cardConImg'
//                                     cover={
                                   
//                                         <img 
//                                          className="cardConImg"
//                                         src={card} 
//                                         alt={`Testimony ${i + 1}`}
//                                         loading="lazy" 
                                        
//                                       />

//                                   }
//                                 >
                                   
//                                 </Card>
//                             </div>
//                            </Link>
//                         </SwiperSlide>
//                     ))}
//                     <SliderButtons /> 
//                 </Swiper>
//             </div>
//         </section>
//     );
// });

// export default TestimonyComponent;
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
    slidesToShow: 1, // Show 1 image on mobile
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
