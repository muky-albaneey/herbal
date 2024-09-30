import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residence.css';
import { sliderSettings } from '../utills/common';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
};


const products =[
  './testimony.jpg',
  './testimony2.jpg',
  './testimony3.jpg',
  './testimony4.jpg'
]

const TestimonyComponent = React.memo(() => {

  const SliderButtons = () => {
    
    const swiper = useSwiper(); 
        return (
            <div className='r-buttons'>
                <button onClick={() => swiper.slidePrev()} >&lt;</button>
                <button onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        );
    };

    return (
        <section className="r-wrapper">
            <div className="r-container">
                <Swiper {...sliderSettings}>
                    {products.map((card, i) => (
                        <SwiperSlide key={i}>
                           <Link to='#' style={{ textDecoration:'none' }}>
                           <div className="flexColStart r-card">
                                <Card
                                    hoverable
                                    className='cardCon'
                                    id='cardConImg'
                                    cover={
                                   
                                        <img 
                                         className="cardConImg"
                                        src={card} 
                                        alt={`Testimony ${i + 1}`}
                                        loading="lazy" 
                                        
                                      />

                                  }
                                >
                                   
                                </Card>
                            </div>
                           </Link>
                        </SwiperSlide>
                    ))}
                    <SliderButtons /> 
                </Swiper>
            </div>
        </section>
    );
});

export default TestimonyComponent;
