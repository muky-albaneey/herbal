import React from 'react';
import { ImCart } from 'react-icons/im';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Link, useOutletContext } from 'react-router-dom';
import '../pages/product/product.css';
import { Rate } from 'antd';

export default function SearchResults() {
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
            <div key={product.id} className="p-2 md:p-4" style={{ display:'flex', justifyContent:'center',alignItems:'center', overflow:'scroll' }}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden"> {/* Added overflow-hidden */}
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-full h-48 object-cover" // Adjust height to control overflow
                  src={product.product_image?.url.startsWith('https://') ? product.product_image.url : `https://${product.product_image?.url}`}
                  alt={product.name}
                />
                <div className="p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 text-sm md:text-base"><TbCurrencyNaira />{product.price}</p>
                  <Rate disabled defaultValue={product.rating || 4} />
                  <p className="text-xs md:text-sm text-gray-500 mt-2">{product.description}</p>
                </div>
              </Link>
              <div className="p-3 md:p-4">
                <button onClick={() => handleAddToCart(product)} className="w-full bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
                  Add to Cart <span className="circle_cart"><ImCart /></span>
                </button>
              </div>
            </div>
          </div>
          ))}
        </ul>
      )}
    </div>
  );
}