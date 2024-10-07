
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
import { sliderSettings } from "../utills/common";
import { Trans, useTranslation } from 'react-i18next'
import TestimonyComponent from "./Testimony";
import AutoPlay from "./AutoCard";
import Whatsapp from "./WhatApp";
import { useOutletContext } from "react-router-dom";
import SearchResults from "./SearchResults";
import AutoPlayVid from "./VideoTestimony";
import SearchResultsFoo from "./FooSearch";
// import IMG_7863 from '../../public/IMG_7863.JPG';

export default function HomeComponent() {
   

    const { t } = useTranslation();

    // Function to fetch data based on the search query
// const { t } = useTranslation();
const { searchResults } = useOutletContext();
// const testimony = [
//     {
//       id: 1,
//       comment: t('testimonials.0.comment'),
//       icon: <BsQuote className="icon_testimony" />,
//       name: t('testimonials.0.name'),
//       title: t('testimonials.0.title')
//     },
//     {
//       id: 2,
//       comment: t('testimonials.1.comment'),
//       icon: <BsQuote className="icon_testimony" />,
//       name: t('testimonials.1.name'),
//       title: t('testimonials.1.title')
//     },
//     {
//       id: 3,
//       comment: t('testimonials.2.comment'),
//       icon: <BsQuote className="icon_testimony" />,
//       name: t('testimonials.2.name'),
//       title: t('testimonials.2.title')
//     }
//   ];

  return (
    <div className='wrapper'> 
        <section>
            {searchResults&& <SearchResults />}
        </section>
        <CarouselComponent />
        <section className="about_con">
            <aside className="about_con_left"></aside>
            <aside className="about_con_right">
                <header className="about_header">
                    {/* <div className='line'></div> */}
                    <h4>{t('realty.heading')}</h4>
                </header>
                <article>
                <p>{t('realty.part1')}</p>
                <p>{t('realty.part2')}</p>
                </article>
            </aside>
        </section>
        <section className="products_con" style={{ width:'100rem' }}>
            <Residence message={{ choice:'', popular:'' , side:'one'}}/>
            {/* <Residence message={{ choice:'', popular:true, side:'two'}}/> */}
            <AutoPlay />
            <Residence message={{ choice:'', popular:'', side:'three'}}/>
            <AutoPlay />
        </section>
        <section className='countCon'>
            <div className="countContent">
                <div className="countItems">
                    <h1>
                    <CountComponent start={21} end={10000} duration={3} prefix='' suffix='+ client' />
                    </h1>
                    <p>Served</p>
                </div>
               
                <div className="countItems">
                    <h1>
                    <CountComponent start={12} end={100} duration={3} prefix='' suffix='%' />
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
                {t('achievement.heading')} 
                </h1>
                <p>{t('feedback.part1')}</p>
                 <p>{t('feedback.part2')}</p>
            </aside>
            <aside className="hide_achiement">
                <img src='./IMG_7863.JPG' alt="" />
            </aside>
        </section>
        <Whatsapp />
        <section className="accodion">
            
        <h1>{t('faq_heading')}</h1>
            <div className="acodion_con">
                <AccodionComponent />
            </div>
        </section>
        <section className="testimony">
    <h1>{t('customer_testimonial.heading')}</h1>
            <AutoPlayVid />
            <TestimonyComponent/>
</section>

    </div>
  );
}