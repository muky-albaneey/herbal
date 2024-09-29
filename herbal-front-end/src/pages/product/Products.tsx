import React, { useState } from 'react';
import ListComponent_info from '../../component/products/Product_list';
import SearchWithButtonExample from '../../component/Search';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import TableCom from '../../component/table/Table';


export default function ProductsComponent() {
  const [categories, setCategories] = useState();
  const { t } = useTranslation();
  const category = 'new bitter';
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
      <div className="tags">
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
        <NavLink to={`product-tag/`}>new  bitter</NavLink>
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

