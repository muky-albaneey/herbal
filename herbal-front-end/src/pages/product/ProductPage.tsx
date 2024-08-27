import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import data from '../../component/utills/data.json';
import './product.css';
import { ImCart } from 'react-icons/im';
import { Card } from 'antd';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from '../../component/utills/common';

const SliderButtons = ({side}) => {
  const swiper = useSwiper(); 
  return (
      <div className={side == true ? 'r-button' : 'r-buttons'}>
          <button onClick={() => swiper.slidePrev()} >&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
  );
};

export default function ProductPageComponent() {

    const {id}= useParams()
    const find_product = data.find((products)=>products.id == id);
let product_info = [
  {
    id:1,
    img:'/IMG_7871.JPG'
  },
  {
    id:2,
    img:'/IMG_7871.JPG'
  },
  {
    id:3,
    img:'/IMG_7871.JPG'
  }
]
  return (
    <div className='product_wrapper'>
        <h1>Product Details</h1>
        <section className="product_top_con">
            <aside className='product_con_left'></aside>
            <aside className='product_con_right'>
             <div className="product_price_con">
              <h3>Herbal Supplements</h3>
                <p>
                $450.00
                </p>
             </div>
              <section className="product_desc">
                 These are concentrated forms of herbs meant to provide specific health benefits. For example, Ashwagandha capsules can help reduce stress, while Turmeric supplements may offer anti-inflammatory benefits.

                Supplements are usually taken daily, often as part of a health regimen.
              </section>
              <div className="control_products">
                <button>+</button>
                <h2>1</h2>
                <button>-</button>
              </div>
              <div className="product_add_cart">
              <NavLink to="fan"  className='product_cart_btn' style={{textDecoration : 'none', display:'flex'}}> <ImCart />Cart Added</NavLink>

              <NavLink to="fan"  className='product_cart_btn_2' style={{textDecoration : 'none', display:'flex'}}> <ImCart />Buy now</NavLink>
              </div>
            </aside>
        </section>
        <section className="place_order">
          <h1>Popular Order</h1>
          <section className="r-wrapper">
            <div className="r-container">
                <Swiper {...sliderSettings}>
                    {product_info.map((card, i) => (
                        <SwiperSlide key={i}>
                           {/* <Link to={`product/${card.id}`}> */}
                           <div className="flexColStart r-card">
                                <Card
                                    hoverable
                                    className='cardCon'
                                    cover={<img src={card.img} alt={card.id} loading="lazy" />}
                                >
                                    <div className="cardItemInfo">
                                      <article>
                                        <h4>
                                           <span> {card.area}</span> <br />
                                            <span>{card.price}</span>
                                        </h4>
                                      
                                      </article>
                                      <div className="add-to-cart">
                                        <ImCart />
                                      </div>
                                    </div>
                                </Card>
                            </div>
                           {/* </Link> */}
                        </SwiperSlide>
                    ))}
                    <SliderButtons side={true}/> 
                </Swiper>
            </div>
        </section>
       
        </section>
    </div>
  );
}
