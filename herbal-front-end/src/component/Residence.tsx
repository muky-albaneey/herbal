import React from 'react';
import { ImCart} from "react-icons/im";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residence.css';
import data from '../utills/data.json';
import { sliderSettings } from '../utills/common';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const SliderButtons = ({side}) => {
    const swiper = useSwiper(); 
    return (
        <div className={side == true ? 'r-button' : 'r-buttons'}>
            <button onClick={() => swiper.slidePrev()} >&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};

// const Residence = ({ message }) => {
//     return (
//         <section className="r-wrapper">
//             <div className="r-container">
//                 <Swiper {...sliderSettings}>
//                     {data.map((card, i) => (
//                         <SwiperSlide key={i}>
//                            <Link to={`product/${card.id}`}>
//                            <div className="flexColStart r-card">
//                                 <Card
//                                     hoverable
//                                     className='cardCon'
//                                     cover={<img src={card.image} alt={card.id} loading="lazy" />}
//                                 >
//                                     <div className="cardItemInfo">
//                                       <article>
//                                         <h4>
//                                            <span> {card.area}</span> <br />
//                                             <span>{card.price}</span>
//                                         </h4>
                                      
//                                       </article>
//                                       <div className="add-to-cart">
//                                         <ImCart />
//                                       </div>
//                                     </div>
//                                 </Card>
//                             </div>
//                            </Link>
//                         </SwiperSlide>
//                     ))}
//                     <SliderButtons side={message.popular}/> 
//                 </Swiper>
//             </div>
//         </section>
//     );
// };
const Residence = React.memo(({ message }) => {
    return (
        <section className="r-wrapper">
            <div className="r-container">
                <Swiper {...sliderSettings}>
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                           <Link to={`product/${card.id}`}>
                           <div className="flexColStart r-card">
                                <Card
                                    hoverable
                                    className='cardCon'
                                    cover={<img src={card.image} alt={card.id} loading="lazy" />}
                                >
                                    <div className="cardItemInfo">
                                      <article>
                                        <h4>
                                           <span> {card.name}</span> <br />
                                            <span>{card.price}</span>
                                        </h4>
                                      
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
