// import React, { useEffect, useState } from 'react';
// import { ImCart } from "react-icons/im";
// import axios from 'axios';
// import '../../component/residence.css';
// import '../../pages/product/product.css';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';

// const ListComponent_info = React.memo(({ category }) => {
//     const [products, setProducts] = useState([]);

//     // Fetch the data from the API when the component mounts
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 let response;

//                 // If category is provided and not null, fetch from category-specific API
//                 if (category != null) {
//                 response = await axios.get(`https://backend-herbal.onrender.com/products/all`,
//                     {
//                             withCredentials: true,
//                             headers: {
//                               'Cache-Control': 'no-cache',
//                             },
//                     }
//                     );
//                 } else {
//                     // Fetch all products if no category is provided
//                     response = await axios.get('https://backend-herbal.onrender.com/products/all',
//                         {
//                             withCredentials: true,
//                             headers: {
//                               'Cache-Control': 'no-cache',
//                             },
//                           }
//                     );
//                 }

//                 const data = response.data;
//                 setProducts(response.data)
//                 // Log data to verify the response
//                 // console.log('Fetched products:', data);

//                 // if (Array.isArray(data)) {
//                 //     setProducts(response.data); // Set the fetched data to state
//                 // } else {
//                 //     console.error("Invalid data format:", data);
//                 //     setProducts([]); // If data is not an array, set an empty array
//                 // }
//             } catch (error) {
//                 console.error("Error fetching the products:", error);
//             }
//         };

//         fetchProducts();
//     }, [category]); // Dependency on category so it refetches when category changes

//     return (
//         <section className="r-wrapper">
//             <div className="r-container" id='products_list_con'>
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <Link to={`/product/${product.id}`} key={product.id}>
//                             <div className="flexColStart r-card">
//                                 <Card
//                                     hoverable
//                                     className='cardCon'
//                                     id='card_product'
//                                     cover={
//                                         <img 
//                                             src={product.product_image.url.startsWith('https') 
//                                                 ? product.product_image.url 
//                                                 : `https://${product.product_image.url}`} 
//                                             alt={product.name} 
//                                             loading="lazy" 
//                                         />
//                                     }
//                                 >
//                                     <div className="cardItemInfo">
//                                         <article>
//                                             <h4>
//                                                 <span>{product.name}</span> <br />
//                                                 <span>{product.price}</span>
//                                             </h4>
//                                         </article>
//                                         <div className="add-to-cart">
//                                             <ImCart />
//                                         </div>
//                                     </div>
//                                 </Card>
//                             </div>
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
import React, { useEffect, useState } from 'react';
import { ImCart } from "react-icons/im";
import axios from 'axios';
import '../../component/residence.css';
import '../../pages/product/product.css';
import { Link } from 'react-router-dom';

const ListComponent_info = React.memo(({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://backend-herbal.onrender.com/products/all`, {
                    withCredentials: true,
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
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
            <div className="r-container" id='products_list_con'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} id='listWrapper'>
                            <div className="flexColStart r-card">
                                <img 
                                    src={product.product_image.url.startsWith('https') 
                                        ? product.product_image.url 
                                        : `https://${product.product_image.url}`} 
                                    alt={product.name} 
                                    loading="lazy" 
                                />
                                <div className="cardItemInfo">
                                    <article>
                                        <h4>
                                            <span>{product.name}</span> <br />
                                            <span>${product.price}</span>
                                        </h4>
                                    </article>
                                    <div className="add-to-cart">
                                        <button onClick={(e) => {
                                            e.preventDefault(); // Prevent navigation when adding to cart
                                            handleAddToCart(product);
                                        }}>
                                            Add to Cart <ImCart />
                                        </button>
                                    </div>
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
