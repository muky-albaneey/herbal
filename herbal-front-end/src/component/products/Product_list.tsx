import { TbCurrencyNaira } from "react-icons/tb"; 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../../component/residence.css';
import '../../pages/product/product.css';
import { Link } from 'react-router-dom';

const ListComponent_info = React.memo(({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
             
                const endpoint = category ? `https://backend-herbal.onrender.com/products/category/${category}` : 'https://backend-herbal.onrender.com/products/all';
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
                            {/* <div className="flexColStart r-card"> */}
                                <img 
                                    src={product.product_image?.url.startsWith('https') 
                                        ? product.product_image.url 
                                        : `https://${product.product_image?.url}`} 
                                    alt={product.name} 
                                    loading="lazy" 
                                />
                                <div className="list__info">
                                    <article>
                                        
                                            <span>{product.name}</span> <br />

                                    
                                    </article>
                                    <div className="add_list_cart">
                                        <button onClick={(e) => {
                                            e.preventDefault(); // Prevent navigation when adding to cart
                                            handleAddToCart(product);
                                        }}>
                                            <h4 style={{ display:'flex',justifyContent:'flex-start', alignItems:'center' }}> <span><TbCurrencyNaira />{product.price}</span></h4>
                                            <div>
                                                Add to Cart 
                                                {/* <span className="circle_cart">
                                            <ImCart /></span> */}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            {/* </div> */}
                        </Link>
                    ))
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </section>
    );
});

export default ListComponent_info;
