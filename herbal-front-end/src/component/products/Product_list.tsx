// import React from 'react';
// import { ImCart} from "react-icons/im";
// import '../../component/residence.css';
// import '../../pages/product/product.css'
// import data from '../../utills/data.json';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';



// const ListComponent_info = React.memo(() => {
//     return (
//         <section className="r-wrapper">
//             <div className="r-container" id='products_list_con'>
               
//                     {data.map((card, i) => (
                       
//                            <Link to={`/product/${card.id}`}>
//                            <div className="flexColStart r-card">
//                                 <Card
//                                     hoverable
//                                     className='cardCon'
//                                     id='card_product'
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
                       
//                     ))}
    
//             </div>
//         </section>
//     );
// });
import React, { useEffect, useState } from 'react';
import { ImCart } from "react-icons/im";
import axios from 'axios';
import '../../component/residence.css';
import '../../pages/product/product.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const ListComponent_info = React.memo(({ category }) => {
    const [products, setProducts] = useState([]);

    // Fetch the data from the API when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response;

                // If category is provided and not null, fetch from category-specific API
                if (category) {
                    response = await axios.get(`https://backend-herbal.onrender.com/products/category/${category}`,
                        {
                            withCredentials: true,
                            headers: {
                              'Cache-Control': 'no-cache',
                            },
                          }
                    );
                } else {
                    // Fetch all products if no category is provided
                    response = await axios.get('https://backend-herbal.onrender.com/products/all',
                        {
                            withCredentials: true,
                            headers: {
                              'Cache-Control': 'no-cache',
                            },
                          }
                    );
                }

                const data = response.data;

                // Log data to verify the response
                console.log('Fetched products:', data);

                if (Array.isArray(data)) {
                    setProducts(data); // Set the fetched data to state
                } else {
                    console.error("Invalid data format:", data);
                    setProducts([]); // If data is not an array, set an empty array
                }
            } catch (error) {
                console.error("Error fetching the products:", error);
            }
        };

        fetchProducts();
    }, [category]); // Dependency on category so it refetches when category changes

    return (
        <section className="r-wrapper">
            <div className="r-container" id='products_list_con'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <div className="flexColStart r-card">
                                <Card
                                    hoverable
                                    className='cardCon'
                                    id='card_product'
                                    cover={
                                        <img 
                                            src={product.product_image.url.startsWith('https') 
                                                ? product.product_image.url 
                                                : `https://${product.product_image.url}`} 
                                            alt={product.name} 
                                            loading="lazy" 
                                        />
                                    }
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
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </section>
    );
});

export default ListComponent_info;
