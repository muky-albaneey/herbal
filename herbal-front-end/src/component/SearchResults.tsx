import React from 'react';
import { ImCart } from 'react-icons/im';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Link, useOutletContext } from 'react-router-dom';
import '../pages/product/product.css';
function SearchResults() {
  const { searchResults } = useOutletContext();
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart.`);
    // Add the logic to handle adding to the cart
};
  return (
    <div>
    
      {searchResults.length === 0 ?'' : (
        <ul>
          {searchResults.map((product) => (
            // <li key={item.id}>{item.name}</li>
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
                            <h4 > <span><TbCurrencyNaira />{product.price}</span></h4>
                            <div>
                                Add to Cart 
                                <span className="circle_cart">
                            <ImCart /></span>
                            </div>
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
