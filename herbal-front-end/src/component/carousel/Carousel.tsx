import React from 'react';
import { Carousel } from 'antd';
import './carousel.css';
// import Top from '../Top';
import { TypeAnimation } from 'react-type-animation';


const CarouselComponent: React.FC = () => (
  <div style={{ background:'rgb(2, 27, 7)' }}>
    <Carousel 
      arrows 
      dotPosition="right" 
      infinite={true} 
      autoplay={true} 
      autoplaySpeed={2000} 
      fade={true} 
      waitForAnimate={true} 
      speed={1200} 
      className='carousel'
    >
      <div className='item-1' id='item'>
        <div id='items_con'>
        <article className='item_content'>
       
            <h1>
            <TypeAnimation
                sequence={[
                  'KENZY NATURALS ', // Types 'One'
                  1000, // Waits 1s
                  () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  }
                ]}
                  className='text_typing'
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
              </h1>
              <p>
              <span>
                These are traditional remedies that often combine several herbs to
                
              target specific health issues like colds, flu, or digestive problems.
              </span>
              </p>
            <button>SHOP NOW</button>
          </article>
        </div>
      </div>
      <div className='item-2'  id='item'>
          <div id='items_con'>
          <article className='item_content'>
          <h1>
            <TypeAnimation
                sequence={[
                  'KENZY NATURALS ', // Types 'One'
                  1000, // Waits 1s
                  () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  }
                ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                    className='text_typing'
                 
                />
              </h1>
              <p>
              <span>
                These are traditional remedies that often combine several herbs to
                
              target specific health issues like colds, flu, or digestive problems.
              </span>
              </p>
            <button>SHOP NOW</button>
          </article>
          </div>
      </div>
      <div className='item-3'  id='item'>
          <div id='items_con'>
          <article className='item_content'>
          <h1>
            <TypeAnimation
                sequence={[
                  'KENZY NATURALS ', // Types 'One'
                  1000, // Waits 1s
                  () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  }
                          ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                  className='text_typing'
               
              />
              </h1>
              <p>
              <span>
                These are traditional remedies that often combine several herbs to
                
              target specific health issues like colds, flu, or digestive problems.
              </span>
              </p>
            <button>SHOP NOW</button>
          </article>
          </div>
      </div>
      <div className='item-4'  id='item'>
          <div id='items_con'>
          <article className='item_content'>
          <h1 >
            <TypeAnimation
                sequence={[
                  'KENZY NATURALS ', // Types 'One'
                  500, // Waits 1s
                  () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className='text_typing'
          
              />
              </h1>
              <p>
              <span>
                These are traditional remedies that often combine several herbs to
                
              target specific health issues like colds, flu, or digestive problems.
              </span>
              </p>
            <button>SHOP NOW</button>
          </article>
          </div>
      </div>
    </Carousel>
  </div>
);

export default CarouselComponent;
