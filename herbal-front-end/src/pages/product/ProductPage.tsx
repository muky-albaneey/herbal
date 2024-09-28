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
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { Card } from 'antd';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from '../../utills/common';
import './product.css';
import useCartStore from '../../utills/store/cart';

const SliderButtons = ({ side }) => {
  const swiper = useSwiper();
  return (
    <div className={side ? 'r-button' : 'r-buttons'}>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default function ProductPageComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch product data
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(`https://backend-herbal.onrender.com/products/${id}`);
  //       const data = await response.json();
  //       setProduct(data);
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //     }
  //   };

  //   // Fetch related products
  //   const fetchRelatedProducts = async () => {
  //     try {
  //       const response = await fetch(`https://backend-herbal.onrender.com/products/category/${product?.category}`);
  //       const data = await response.json();
  //       setRelatedProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching related products:', error);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  // useEffect(() => {
  //   if (product) {
  //     fetchRelatedProducts();
  //   }
  // }, [product]);
  useEffect(() => {
    // Fetch product data
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://backend-herbal.onrender.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  
  // Move fetchRelatedProducts outside of the first useEffect
  const fetchRelatedProducts = async () => {
    try {
      const response = await fetch(`https://backend-herbal.onrender.com/products/category/${product?.category}`);
      const data = await response.json();
      setRelatedProducts(data);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };
  
  // Now you can call fetchRelatedProducts in the second useEffect
  useEffect(() => {
    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);
  
  // Zustand store actions
  const addItemToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  // Local state for quantity
  const [quantity, setQuantity] = useState(0);

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (product) {
      addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    const itemTotal = item.price * (item.quantity || 0);
    return total + itemTotal;
  }, 0);


  return (
    <div className='product_wrapper'>
      <h1>Product Details</h1>
      {product && (
        <section className="product_top_con">
          <aside className='product_con_left'>
            {/* <img src={product.product_image.url} alt={product.name} loading="lazy" /> */}
            <img 
                src={product.product_image.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image.url}`} 
                alt={product.id} 
                loading="lazy" 
              />

          </aside>
          <aside className='product_con_right'>
            <div className="product_price_con">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <section className="product_desc">
              {product.description}
            </section>
            <div className="control_products">
              <button>+</button>
              <h2>1</h2>
              <button>-</button>
            </div>
            <div className="product_add_cart">
              <button  className='product_cart_btn' style={{ textDecoration: 'none', display: 'flex' }} onClick={handleAddToCart}>
                <ImCart /> Cart Added
              </button>
              <NavLink to="fan" className='product_cart_btn_2' style={{ textDecoration: 'none', display: 'flex' }}>
                <ImCart /> Buy now
              </NavLink>
            </div>
          </aside>
        </section>
      )}
      <section className="place_order">
        <h1>Popular Order</h1>
        <section className="r-wrapper">
          <div className="r-container">
            <Swiper {...sliderSettings}>
              {relatedProducts.map((relatedProduct, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <Card
                      hoverable
                      className='cardCon'
                      cover={
                      // <img src={relatedProduct.product_image.url} alt={relatedProduct.name} loading="lazy" />
                                              <img 
                          src={product.product_image.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image.url}`} 
                          alt={product.id} 
                          loading="lazy" 
                        />

                    }
                    >
                      <div className="cardItemInfo">
                        <article>
                          <h4>
                            <span>{relatedProduct.name}</span> <br />
                            <span>${relatedProduct.price}</span>
                          </h4>
                        </article>
                        <div className="add-to-cart">
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
