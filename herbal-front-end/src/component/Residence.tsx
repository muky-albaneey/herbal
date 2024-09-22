// import React from 'react';
// import { ImCart} from "react-icons/im";
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/css';
// import './residence.css';
// import data from '../utills/data.json';
// import { sliderSettings } from '../utills/common';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';

// export type Product = {
//     product_image: string;
//     name: string;
//     category: string;
//     price: number;
//     quantity: number;
//     description: number;
//     createdAt: number;
//   };
   
// const SliderButtons = ({side}) => {


// const [products, setProducts] = React.useState<Product[]>([]);
// const [loading, setLoading] = React.useState(true);
// const [error, setError] = React.useState<string | null>(null);
  

// const swiper = useSwiper(); 
//     return (
//         <div className={side == true ? 'r-button' : 'r-buttons'}>
//             <button onClick={() => swiper.slidePrev()} >&lt;</button>
//             <button onClick={() => swiper.slideNext()}>&gt;</button>
//         </div>
//     );
// };

// const Residence = React.memo(({ message }) => {
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
//                                            <span> {card.name}</span> <br />
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
// });

// export default Residence;
// Residence.tsx
import React, { useState, useEffect } from 'react';
import { ImCart } from "react-icons/im";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residence.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

export type Product = {
  product_image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  createdAt: string;
};

const SliderButtons = ({ side }: { side: boolean }) => {
  const swiper = useSwiper();
  return (
    <div className={side ? 'r-button' : 'r-buttons'}>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const Residence = ({ message }: { message: { choice: string; popular: string } }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="r-wrapper">
      <div className="r-container">
        <Swiper>
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <Link to={`product/${product.name}`}>
                <div className="flexColStart r-card">
                  <Card
                    hoverable
                    className='cardCon'
                    cover={<img src={product.product_image} alt={product.name} loading="lazy" />}
                  >
                    <div className="cardItemInfo">
                      <article>
                        <h4>
                          <span>{product.name}</span> <br />
                          <span>{product.price}</span>
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
          <SliderButtons side={!!message.popular} />
        </Swiper>
      </div>
    </section>
  );
};

export default Residence;
