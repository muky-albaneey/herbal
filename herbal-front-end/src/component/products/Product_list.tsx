// import { TbCurrencyNaira } from "react-icons/tb"; 
// import React, { useEffect, useState } from 'react';
// import { ImCart } from "react-icons/im";
// import axios from 'axios';
// // import '../../component/residence.css';
// import '../../pages/product/product.css';
// import { Link } from 'react-router-dom';

// const ListComponent_info = React.memo(({ category }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
             
//                         const endpoint = category ? `https://backend-herbal.onrender.com/products/category/${category}` : 'https://backend-herbal.onrender.com/products/all';
//                         const response = await axios.get(endpoint, {
//                             withCredentials: true,
//                             headers: { 'Cache-Control': 'no-cache' },
//                         });
                    
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error("Error fetching the products:", error);
//             }
//         };

//         fetchProducts();
//     }, [category]);

//     const handleAddToCart = (product) => {
//         console.log(`Added ${product.name} to cart.`);
//         // Add the logic to handle adding to the cart
//     };

//     return (
//         <section className="r-wrapper">
//             <div className="r-container" id='listWrapper'>
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <Link to={`/product/${product.id}`} key={product.id} id='listCon'>
//                             {/* <div className="flexColStart r-card"> */}
//                                 <img 
//                                     src={product.product_image?.url.startsWith('https') 
//                                         ? product.product_image.url 
//                                         : `https://${product.product_image?.url}`} 
//                                     alt={product.name} 
//                                     loading="lazy" 
//                                 />
//                                 <div className="list__info">
//                                     <article>
                                        
//                                             <span>{product.name}</span> <br />

                                    
//                                     </article>
//                                     <div className="add_list_cart">
//                                         <button onClick={(e) => {
//                                             e.preventDefault(); // Prevent navigation when adding to cart
//                                             handleAddToCart(product);
//                                         }}>
//                                             <h4 > <span><TbCurrencyNaira />{product.price}</span></h4>
//                                             <div>
//                                                 Add to Cart 
//                                                 <span className="circle_cart">
//                                             <ImCart /></span>
//                                             </div>
//                                         </button>
//                                     </div>
//                                 </div>
//                             {/* </div> */}
//                         </Link>
//                     ))
//                 ) : (
//                     <p>No products found</p>
//                 )}
//             </div>
//         </section>
//     );
// });

// export default ListComponent_info;
import { TbCurrencyNaira } from "react-icons/tb"; 
import React, { useEffect, useState } from 'react';
import { ImCart } from "react-icons/im";
import axios from 'axios';
import '../../pages/product/product.css';
import { Link } from 'react-router-dom';

const ListComponent_info = React.memo(({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const endpoint = category 
                    ? `https://backend-herbal.onrender.com/products/category/${category}` 
                    : 'https://backend-herbal.onrender.com/products/all';
                const response = await axios.get(endpoint, {
                    withCredentials: true,
                    headers: { 'Cache-Control': 'no-cache' },
                });
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching the products:", error);
            }
        };

        fetchProducts();
    }, [category]);

    const handleAddToCart = (product) => {
        console.log(`Added ${product.name} to cart.`);
        // Add the logic to handle adding to the cart
    };

    return (
        <section className="r-wrapper">
            <div className="r-container" id='listWrapper'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} id='listCon'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img 
                                    src={product.product_image?.url.startsWith('https') 
                                        ? product.product_image.url 
                                        : `https://${product.product_image?.url}`} 
                                    className="card-img-top" 
                                    alt={product.name} 
                                    loading="lazy" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        <TbCurrencyNaira /> {product.price}
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent navigation when adding to cart
                                            handleAddToCart(product);
                                        }}
                                    >
                                        Add to Cart <ImCart />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </section>
    );
});

export default ListComponent_info;
