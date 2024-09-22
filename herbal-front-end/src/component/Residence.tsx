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


const [products, setProducts] = React.useState<Product[]>([]);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState<string | null>(null);
  
React.useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://backend-herbal.onrender.com/products/all', {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache', // Prevent caching of the response
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
  
    // Check if there are no products available
    if (products.length === 0) {
      return <div>No products available</div>;
    }
const swiper = useSwiper(); 
    return (
        <div className={side == true ? 'r-button' : 'r-buttons'}>
            <button onClick={() => swiper.slidePrev()} >&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};

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
