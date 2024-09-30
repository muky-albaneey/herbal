import React, { useState } from 'react';
import ListComponent_info from '../../component/products/Product_list';
import SearchWithButtonExample from '../../component/Search';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import TableCom from '../../component/table/Table';


export default function ProductsComponent() {
  const [categories, setCategories] = useState(null);
  const { t } = useTranslation();

  const handleCategoryChange = (category) => {
    setCategories(category);
  };

  const category = categories;
  return (
    
    <div className='productListWrapper'>
    <aside className="filter_sec">
      <h1>{t('products_heading')}</h1>
      <div className="search_product">
        <h2>{t('search_product')}</h2>
        <SearchWithButtonExample />
      </div>
      <h1>{t('product_tags_heading')}</h1>
      <div className="marquee">
        Scroll towards bottom for more product tags
      </div>
      <div className="tags space-y-4">
          <button
            onClick={() => handleCategoryChange('booster')}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
          >
            Booster
          </button>
          <button
            onClick={() => handleCategoryChange('bitter')}
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          >
            Bitter
          </button>
        {/* <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink> */}
        
      </div>
      
    </aside>
    <main className="house_listing">
    <ListComponent_info category={category} />
     
    </main>
    
    </div>
  );
}

