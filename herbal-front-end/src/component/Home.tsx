
import { BsQuote } from "react-icons/bs"; 
import React from 'react';
import './home.css'
import CarouselComponent from './carousel/Carousel';
import Residence from './Residence';
import CountComponent from '../component/counter/Count';
import type { CollapseProps } from 'antd';
import { Card, Collapse } from 'antd';
import AccodionComponent from './acordion/Accodion';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from "./utills/common";

// import IMG_7863 from '../../public/IMG_7863.JPG';


const testimony = [
    {
        id:1,
        comment: 'I’ve been using this sleep aid for two weeks, and it has significantly improved my sleep. However, I find the capsules a bit too large to swallow easily.',
        icon: <BsQuote className="icon_testimony"/>,
        name:'James Smith',
        title:'Trader'
    },
    {
        id:2,
        comment: 'I’ve been using this sleep aid for two weeks, and it has significantly improved my sleep. However, I find the capsules a bit too large to swallow easily.',
        icon: <BsQuote className="icon_testimony"/>,
         name:'James Smith',
        title:'Trader'
    },
    {
        id:3,
        comment: 'I’ve been using this sleep aid for two weeks, and it has significantly improved my sleep. However, I find the capsules a bit too large to swallow easily.',
        icon: <BsQuote className="icon_testimony"/>,
         name:'James Smith',
        title:'Trader'
    }
]
export default function HomeComponent() {
  return (
    <div className='wrapper'>
        <CarouselComponent />
        <section className="about_con">
            <aside className="about_con_left"></aside>
            <aside className="about_con_right">
                <header className="about_header">
                    <div className='line'></div>
                    <h4>About Us</h4>
                </header>
                <article>
                    <p>
                    Sunnyvale Realty has been serving the community for over 20 years, offering top-notch real estate services. Our team of expert agents is dedicated to helping you find your perfect home. Whether you're buying your first home, upgrading, or looking for an investment, we have the perfect listings for you. 
                    </p>

                    <p>
                    We have in-depth knowledge of the local market trends, neighborhoods, and amenities. We'll use this expertise to help you find the perfect property or sell your home for the best possible price.
                    </p>
                </article>
            </aside>
        </section>
        <section className="products_con" style={{ width:'100rem' }}>
            <Residence message={{ choice:'', popular:'' }}/>
            <Residence message={{ choice:'', popular:true }}/>
            <Residence message={{ choice:'', popular:'' }}/>
        </section>
        <section className='countCon'>
            <div className="countContent">
                <div className="countItems">
                    <h1>
                    <CountComponent start={12} end={202} duration={3} prefix='$' suffix='m' />
                    </h1>
                    <p>
                    Transaction
                    </p>
                </div>
                <div className="countItems">
                    <h1>
                    <CountComponent start={1} end={502} duration={3} prefix='' suffix='+' />
                    </h1>
                    <p>Our Customer</p>
                </div>
                <div className="countItems">
                    <h1>
                    <CountComponent start={2} end={202} duration={3} prefix='' suffix='+' />
                    </h1>
                    <p>Product</p>
                </div>
                <div className="countItems">
                    <h1>
                    <CountComponent start={12} end={202} duration={3} prefix='' suffix='%' />
                    </h1>
                    <p>
                         Customer Satisfaction
                    </p>
                </div>
            </div>
           
        </section>
        <section className="achievement">
            <aside className='achivement_one'>
                <h1>
                     Our Achivement 
                </h1>
                <p>
                Thanks to valuable feedback from our community, we've enhanced the scent of our lavender sleep aid supplement, making it even more relaxing and enjoyable to use. We're thrilled to share that since this improvement, 92% of customers have reported a more satisfying bedtime routine. Your input makes a difference, and we're committed to continuously improving our products based on what you need.

                </p>
                <p>

                By effectively highlighting and celebrating these achievements, you not only strengthen your relationship with customers but also reinforce the value of their feedback, driving further engagement and loyalty.
                </p>
            </aside>
            <aside className="hide_achiement">
                <img src='./IMG_7863.JPG' alt="" />
            </aside>
        </section>

        <section className="accodion">
            
            <h1>
                FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className="acodion_con">
                <AccodionComponent />
            </div>
        </section>
        <section className="testimony">
    <h1>CUSTOMER TESTIMONIAL</h1>
    <Swiper {...sliderSettings}>
        {testimony.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
                <div className="testimony_items">
                    <span className="icon_testimony">{item.icon}</span>
                    <p className="testimony_title">
                        <span>{item.name}</span>
                        <span>{item.title}</span>
                    </p>
                    <p className="testimony_comment">
                        {item.comment}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
</section>

       
    </div>
  );
}
