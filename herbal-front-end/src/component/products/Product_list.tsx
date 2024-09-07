import React from 'react';
import { ImCart} from "react-icons/im";
import '../../component/residence.css';
import '../../pages/product/product.css'
import data from '../../utills/data.json';
import { Card } from 'antd';
import { Link } from 'react-router-dom';



const ListComponent_info = React.memo(() => {
    return (
        <section className="r-wrapper">
            <div className="r-container" id='products_list_con'>
               
                    {data.map((card, i) => (
                       
                           <Link to={`/product/${card.id}`}>
                           <div className="flexColStart r-card">
                                <Card
                                    hoverable
                                    className='cardCon'
                                    id='card_product'
                                    cover={<img src={card.image} alt={card.id} loading="lazy" />}
                                >
                                    <div className="cardItemInfo">
                                      <article>
                                        <h4>
                                           <span> {card.name}</span> <br />
                                            <span>{card.price}</span>
                                        </h4>
                                      
                                      </article>
                                      <div className="add-to-cart">
                                        <ImCart />
                                      </div>
                                    </div>
                                </Card>
                            </div>
                           </Link>
                       
                    ))}
    
            </div>
        </section>
    );
});

export default ListComponent_info;
