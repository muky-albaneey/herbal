
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
// import IMG_7863 from '../../public/IMG_7863.JPG';

export default function HomeComponent() {

const { t } = useTranslation();
const testimony = [
    {
      id: 1,
      comment: t('testimonials.0.comment'),
      icon: <BsQuote className="icon_testimony" />,
      name: t('testimonials.0.name'),
      title: t('testimonials.0.title')
    },
    {
      id: 2,
      comment: t('testimonials.1.comment'),
      icon: <BsQuote className="icon_testimony" />,
      name: t('testimonials.1.name'),
      title: t('testimonials.1.title')
    },
    {
      id: 3,
      comment: t('testimonials.2.comment'),
      icon: <BsQuote className="icon_testimony" />,
      name: t('testimonials.2.name'),
      title: t('testimonials.2.title')
    }
  ];

  return (
    <div className='wrapper'>
        <CarouselComponent />
        <section className="about_con">
            <aside className="about_con_left"></aside>
            <aside className="about_con_right">
                <header className="about_header">
                    <div className='line'></div>
                    <h4>{t('realty.heading')}</h4>
                </header>
                <article>
                <p>{t('realty.part1')}</p>
                <p>{t('realty.part2')}</p>
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
                {t('achievement.heading')} 
                </h1>
                <p>{t('feedback.part1')}</p>
                 <p>{t('feedback.part2')}</p>
            </aside>
            <aside className="hide_achiement">
                <img src='./IMG_7863.JPG' alt="" />
            </aside>
        </section>

        <section className="accodion">
            
        <h1>{t('faq_heading')}</h1>
            <div className="acodion_con">
                <AccodionComponent />
            </div>
        </section>
        <section className="testimony">
    <h1>{t('customer_testimonial.heading')}</h1>
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
// HomeComponent.tsx
// import React from 'react';
// import { BsQuote } from 'react-icons/bs';
// import './home.css';
// import CarouselComponent from './carousel/Carousel';
// import Residence from './Residence';
// import CountComponent from '../component/counter/Count';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { sliderSettings } from '../utills/common';
// import { Trans, useTranslation } from 'react-i18next';

// export default function HomeComponent() {
//   const { t } = useTranslation();

//   const testimony = [
//     {
//       id: 1,
//       comment: t('testimonials.0.comment'),
//       icon: <BsQuote className="icon_testimony" />,
//       name: t('testimonials.0.name'),
//       title: t('testimonials.0.title'),
//     },
//     {
//       id: 2,
//       comment: t('testimonials.1.comment'),
//       icon: <BsQuote className="icon_testimony" />,
//       name: t('testimonials.1.name'),
//       title: t('testimonials.1.title'),
//     },
//     {
//       id: 3,
//       comment: t('testimonials.2.comment'),
//       icon: <BsQuote className="icon_testimony" />,
//       name: t('testimonials.2.name'),
//       title: t('testimonials.2.title'),
//     },
//   ];

//   return (
//     <div className='wrapper'>
//       <CarouselComponent />
//       <section className="about_con">
//         {/* Other sections */}
//       </section>
//       <section className="products_con" style={{ width: '100rem' }}>
//         <Residence message={{ choice: '', popular: '' }} />
//         <Residence message={{ choice: '', popular: true }} />
//         <Residence message={{ choice: '', popular: '' }} />
//       </section>
//       <section className='countCon'>
//         {/* CountComponent */}
//       </section>
//       <section className="achievement">
//         {/* Achievement Section */}
//       </section>
//       <section className="accodion">
//         {/* Accordion Section */}
//       </section>
//       <section className="testimony">
//         <h1>{t('customer_testimonial.heading')}</h1>
//         <Swiper {...sliderSettings}>
//           {testimony.map((item, i) => (
//             <SwiperSlide key={i} className="swiper-slide">
//               <div className="testimony_items">
//                 <span className="icon_testimony">{item.icon}</span>
//                 <p className="testimony_title">
//                   <span>{item.name}</span>
//                   <span>{item.title}</span>
//                 </p>
//                 <p className="testimony_comment">
//                   {item.comment}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </div>
//   );
// }
