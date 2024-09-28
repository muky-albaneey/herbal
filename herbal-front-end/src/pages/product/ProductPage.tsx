// import React from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import data from '../../utills/data.json';
// import './product.css';
// import { ImCart } from 'react-icons/im';
// import { Card } from 'antd';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { sliderSettings } from '../../utills/common';

// const SliderButtons = ({side}) => {
//   const swiper = useSwiper(); 
//   return (
//       <div className={side == true ? 'r-button' : 'r-buttons'}>
//           <button onClick={() => swiper.slidePrev()} >&lt;</button>
//           <button onClick={() => swiper.slideNext()}>&gt;</button>
//       </div>
//   );
// };

// export default function ProductPageComponent() {

//     const {id}= useParams()
//     const find_product = data.find((products)=>products.id == id);
// let product_info = [
//   {
//     id:1,
//     img:'/IMG_7871.JPG'
//   },
//   {
//     id:2,
//     img:'/IMG_7871.JPG'
//   },
//   {
//     id:3,
//     img:'/IMG_7871.JPG'
//   }
// ]
//   return (
//     <div className='product_wrapper'>
//         <h1>Product Details</h1>
//         <section className="product_top_con">
//             <aside className='product_con_left'></aside>
//             <aside className='product_con_right'>
//              <div className="product_price_con">
//               <h3>Herbal Supplements</h3>
//                 <p>
//                 $450.00
//                 </p>
//              </div>
//               <section className="product_desc">
//                  These are concentrated forms of herbs meant to provide specific health benefits. For example, Ashwagandha capsules can help reduce stress, while Turmeric supplements may offer anti-inflammatory benefits.

//                 Supplements are usually taken daily, often as part of a health regimen.
//               </section>
//               <div className="control_products">
//                 <button>+</button>
//                 <h2>1</h2>
//                 <button>-</button>
//               </div>
//               <div className="product_add_cart">
//               <NavLink to="fan"  className='product_cart_btn' style={{textDecoration : 'none', display:'flex'}}> <ImCart />Cart Added</NavLink>

//               <NavLink to="fan"  className='product_cart_btn_2' style={{textDecoration : 'none', display:'flex'}}> <ImCart />Buy now</NavLink>
//               </div>
//             </aside>
//         </section>
//         <section className="place_order">
//           <h1>Popular Order</h1>
//           <section className="r-wrapper">
//             <div className="r-container">
//                 <Swiper {...sliderSettings}>
//                     {find_product?.other_images.map((card, i) => (
//                         <SwiperSlide key={i}>
//                            {/* <Link to={`product/${card.id}`}> */}
//                            <div className="flexColStart r-card">
//                                 <Card
//                                     hoverable
//                                     className='cardCon'
//                                     cover={<img src={card.img} alt={find_product.name} loading="lazy" />}
//                                 >
//                                     <div className="cardItemInfo">
//                                       <article>
//                                         <h4>
//                                            <span> {find_product.name}</span> <br />
//                                             <span>{find_product.price}</span>
//                                         </h4>
                                      
//                                       </article>
//                                       <div className="add-to-cart">
//                                         <ImCart />
//                                       </div>
//                                     </div>
//                                 </Card>
//                             </div>
//                            {/* </Link> */}
//                         </SwiperSlide>
//                     ))}
//                     <SliderButtons side={true}/> 
//                 </Swiper>
//             </div>
//         </section>
       
//         </section>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import data from '../../utills/data.json';
import './product.css';
import { ImCart } from 'react-icons/im';
import { Card } from 'antd';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from '../../utills/common';
import useCartStore from '../../utills/store/cart';
import axios from 'axios';
// import useCartStore from '../../store/useCartStore'; 

const SliderButtons = ({ side }: { side: boolean }) => {
  const swiper = useSwiper();
  return (
    <div className={side ? 'r-button' : 'r-buttons'}>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default function ProductPageComponent() {
  // const { id } = useParams();
  // const find_product = data.find((products) => products.id == id);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

    // Fetch the counts for users, products, and orders
    React.useEffect(() => {
      const fetchDashboardData = async () => {
        try {
          const [productResponse, categgory] = await Promise.all([
            axios.get(`https://backend-herbal.onrender.com/products/${id}`),
            axios.get(`https://backend-herbal.onrender.com/products/category/booster`),
          ]);
          
          setProducts(productResponse.data);
          console.log(productResponse.data);

          setCategory(categgory.data.totalUsers);
          console.log(categgory.data);

        } catch (err) {
          setError('Error fetching data.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchDashboardData();
    }, []);

    if (loading) {
      return <div className="text-center mt-6">Loading dashboard data...</div>;
    }

    if (error) {
      return <div className="text-center text-red-600 mt-6">{error}</div>;
    }

  // Zustand store actions
  const addItemToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  // Local state for quantity
  const [quantity, setQuantity] = useState(0);

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (products) {
      addItemToCart({
        id: products.id,
        name: products.name,
        price: products.price,
        quantity: products.quantity,
      });
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    const itemTotal = item.price * (item.quantity || 0);
    return total + itemTotal;
  }, 0);

  
  return (
    <div className='product_wrapper'>
      <div className="cart_page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
            
          ))}
           <h2>Total Price: ${totalPrice.toFixed(1)}</h2>
        </ul>
      )}
    </div>
      <h1>Product Details</h1>
      <section className="product_top_con">
        <aside className='product_con_left'></aside>
        <aside className='product_con_right'>
          <div className="product_price_con">
            <h3>{products.name}</h3>
            <p>${products.price}</p>
          </div>
          <section className="product_desc">
            These are concentrated forms of herbs meant to provide specific health benefits. For example, Ashwagandha capsules can help reduce stress, while Turmeric supplements may offer anti-inflammatory benefits.

            Supplements are usually taken daily, often as part of a health regimen.
          </section>
          <div className="control_products">
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            <h2>{quantity}</h2>
            <button onClick={() => setQuantity(prev => prev - 1)}>-</button>
          </div>
          <div className="product_add_cart">
            <button className='product_cart_btn' onClick={handleAddToCart}>
              <ImCart /> Add to Cart
            </button>
            <NavLink to="fan" className='product_cart_btn_2' style={{ textDecoration: 'none', display: 'flex' }}>
              <ImCart /> Buy now
            </NavLink>
          </div>
        </aside>
      </section>
      <section className="place_order">
        <h1>Popular Order</h1>
        <section className="r-wrapper">
          <div className="r-container">
            <Swiper {...sliderSettings}>
              {category?.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <Card
                      hoverable
                      className='cardCon'
                      cover={<img src={card.product_image.url} alt={card.name} loading="lazy" />}
                    >
                      <div className="cardItemInfo">
                        <article>
                          <h4>
                            <span>{card.name}</span> <br />
                            <span>{card.price}</span>
                          </h4>
                        </article>
                        <div className="add-to-cart" onClick={handleAddToCart}>
                          <ImCart />
                        </div>
                      </div>
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons side={true} />
            </Swiper>
          </div>
        </section>
      </section>
    </div>
  );
}
