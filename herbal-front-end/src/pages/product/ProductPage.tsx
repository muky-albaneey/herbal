// import React, { useEffect, useState } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { ImCart } from 'react-icons/im';
// import { Card } from 'antd';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { sliderSettings } from '../../utills/common';
// import './product.css';
// import useCartStore from '../../utills/store/cart';
// import { TbCurrencyNaira } from 'react-icons/tb';

// const SliderButtons = ({ side }) => {
//   const swiper = useSwiper();
//   return (
//     <div className={side ? 'r-button' : 'r-buttons'}>
//       <button onClick={() => swiper.slidePrev()}>&lt;</button>
//       <button onClick={() => swiper.slideNext()}>&gt;</button>
//     </div>
//   );
// };

// export default function ProductPageComponent() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   useEffect(() => {
//     // Fetch product data
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://backend-herbal.onrender.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [id]);
  
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
  
//   useEffect(() => {
//     if (product) {
//       fetchRelatedProducts();
//     }
//   }, [product]);
  
//   // Zustand store actions
//   const addItemToCart = useCartStore((state) => state.addToCart);

//   // Local state for quantity, defaulting to 1
//   const [quantity, setQuantity] = useState(1);

//   // Handle adding product to cart
//   const handleAddToCart = () => {
//     if (product) {
//       addItemToCart({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         img:product.product_image.url,
//         quantity: quantity, // Pass the current quantity
//       });
//     }
//     setQuantity(1)
//   };

//   return (
//     <div className='product_wrapper'>
//       <h1>Product Details</h1>
//       {product && (
//         <section className="product_top_con">
//           <aside className='product_con_left'>
//             <img 
//               src={product.product_image.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image.url}`} 
//               alt={product.id} 
//               loading="lazy" 
//             />
//           </aside>
//           <aside className='product_con_right'>
//             <div className="product_price_con">
//               <h3>{product.name}</h3>
//               <p><TbCurrencyNaira />{product.price}</p>
//             </div>
//             <section className="product_desc">
//               {product.description}
//             </section>
//             <div className="control_products">
//               <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
//               <h2>{quantity}</h2>
//               <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
//             </div>
//             <div className="product_add_cart">
//               <button className='product_cart_btn' onClick={handleAddToCart}>
//                 <ImCart /> Add to Cart
//               </button>
//               <NavLink to="fan" className='product_cart_btn_2'>
//                 <ImCart /> Buy now
//               </NavLink>
//             </div>
//           </aside>
//         </section>
  
//       )}
//       <section className="place_order">
//         <h1>Popular Order</h1>
//         <section className="r-wrapper">
//           <div className="r-container">
//             <Swiper {...sliderSettings}>
//               {relatedProducts.map((relatedProduct, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="flexColStart r-card">
//                     <Card
//                       hoverable
//                       className='cardCon'
//                       cover={
//                         <img 
//                           src={product.product_image.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image.url}`} 
//                           alt={product.id} 
//                           loading="lazy" 
//                         />

//                     }
//                     >
//                       <div className="cardItemInfo">
//                         <article>
//                           <h4>
//                             <span>{relatedProduct.name}</span> <br />
//                             <span><TbCurrencyNaira />{relatedProduct.price}</span>
//                           </h4>
//                         </article>
//                         <div className="add-to-cart">
//                           <ImCart />
//                         </div>
//                       </div>
//                     </Card>
//                   </div>
//                 </SwiperSlide>
//               ))}
//               <SliderButtons side={true} />
//             </Swiper>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import './product.css';
import useCartStore from '../../utills/store/cart';
import { TbCurrencyNaira } from 'react-icons/tb';

export default function ProductPageComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

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

  // Fetch related products
  const fetchRelatedProducts = async () => {
    try {
      const response = await fetch(`https://backend-herbal.onrender.com/products/category/${product?.category}`);
      const data = await response.json();
      setRelatedProducts(data);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  useEffect(() => {
    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  // Zustand store actions
  const addItemToCart = useCartStore((state) => state.addToCart);

  // Local state for quantity, defaulting to 1
  const [quantity, setQuantity] = useState(1);

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (product) {
      addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.product_image.url,
        quantity: quantity, // Pass the current quantity
      });
    }
    setQuantity(1);
  };

  return (
    <div className="product_wrapper">
      <h1>Product Details</h1>
      {product && (
        <section className="product_top_con">
          <aside className="product_con_left">
            <img
              src={product.product_image.url.startsWith('https://') ? product.product_image.url : 
                `https://${product.product_image.url}`}
              alt={product.id}
              loading="lazy"
            />
          </aside>
          <aside className="product_con_right">
            <div className="product_price_con">
              <h3>{product.name}</h3>
              <p style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                <TbCurrencyNaira />
                {product.price}
              </p>
            </div>
            <section className="product_desc">{product.description}</section>
            <div className="control_products">
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              <h2>{quantity}</h2>
              <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>-</button>
            </div>
            <div className="product_add_cart">
              <button className="product_cart_btn" onClick={handleAddToCart}>
                <ImCart /> Add to Cart
              </button>
              <NavLink to="fan" className="product_cart_btn_2">
                <ImCart /> Buy now
              </NavLink>
            </div>
          </aside>
        </section>
      )}

      <section className="place_order">
        <h1>Popular Orders</h1>
        <section className="related_products_grid">
          {relatedProducts.map((relatedProduct, i) => (
            <div className="card" style={{ width: '18rem' }} key={i}>
              <img
                src={
                  relatedProduct.product_image.url.startsWith('https://')
                    ? relatedProduct.product_image.url
                    : `https://${relatedProduct.product_image.url}`
                }
                className="card-img-top"
                alt={relatedProduct.name}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{relatedProduct.name}</h5>
                <p className="card-text" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                  <TbCurrencyNaira />
                  {relatedProduct.price}
                </p>
                <a href="#" className="btn btn-secondary">
                  Shop now
                </a>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
