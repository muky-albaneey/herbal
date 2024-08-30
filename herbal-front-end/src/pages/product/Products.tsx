import React from 'react';
import ListComponent_info from '../../component/products/Product_list';
import SearchWithButtonExample from '../../component/Search';


export default function ProductsComponent() {
  return (
    <div className='productListWrapper'>
    <aside className="filter_sec">
      <h1>PRODUCTS</h1>
      <div className="search_product">
        <SearchWithButtonExample />
      </div>
      
    </aside>
    <main className="house_listing">
     <ListComponent_info />
    </main>
    </div>
  );
}
