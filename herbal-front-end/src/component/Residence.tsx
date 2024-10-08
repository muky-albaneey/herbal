// import React from 'react';
// import { ImCart} from "react-icons/im";
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




// const Residence = React.memo(({ message }) => {

//   const SliderButtons = () => {
//     console.log(message.popular)
//     const swiper = useSwiper(); 
//         return (
//             <div className={message.popular == true ? 'r-button' : 'r-buttons'}>
//                 <button onClick={() => swiper.slidePrev()} >&lt;</button>
//                 <button onClick={() => swiper.slideNext()}>&gt;</button>
//             </div>
//         );
//     };
//     const [products, setProducts] = React.useState<Product[]>([]);
//     const [loading, setLoading] = React.useState(true);
//     const [error, setError] = React.useState<string | null>(null);
  
//     React.useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get('https://backend-herbal.onrender.com/products/all', {
//             withCredentials: true,
//             headers: {
//               'Cache-Control': 'no-cache',
//             },
//           });
//           console.log(response.data);
          
//           setProducts(response.data);
//         } catch (err) {
//           setError('Error fetching products');
//           console.error(err);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchProducts();
//     }, []);
  
//     if (loading && message.side == "one") return (
//     <div>
//             <button className="btn btn-primary" type="button" disabled>
//         <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
//         <span className="visually-hidden" role="status">Loading...</span>
//       </button>
//       <button className="btn btn-primary" type="button" disabled>
//         <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
//         <span role="status">Loading...</span>
//       </button>
//       <button className="btn btn-primary" type="button" disabled>
//         <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
//         <span className="visually-hidden" role="status">Loading...</span>
//       </button>
//       <button className="btn btn-primary" type="button" disabled>
//         <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
//         <span role="status">Loading...</span>
//       </button>
//     </div>
//   );
//     if (loading && message.side == "two") return <div>Loading products...</div>;
//     if (loading && message.side == "three") return <div>Loading products...</div>;
//     if (error) return <div>{error}</div>;
  
//     // Check if there are no products available
//     if (products.length === 0) {
//       return <div>No products available</div>;
//     }

//     return (
//         <section className="r-wrapper">
//             <div className="r-container">
//                 <Swiper {...sliderSettings}>
//                     {products.map((card, i) => (
//                         <SwiperSlide key={i}>
//                            <Link to={`product/${card.id}`} style={{ textDecoration:'none' }}>
//                            <div className="flexColStart r-card">
//                                 <Card
//                                     hoverable
//                                     className='cardCon'
//                                     cover={
                                   
//                                         <img 
//                                         src={card.product_image.url.startsWith('https://') ? card.product_image.url : `https://${card.product_image.url}`} 
//                                         alt={card.id} 
//                                         loading="lazy" 
//                                       />

//                                   }
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
                                        <h4 >
                                          <span>{card.name}</span> <br />
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
