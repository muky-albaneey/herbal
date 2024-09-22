import React from 'react';
import { Carousel } from 'antd';
import './carousel.css';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

const CarouselComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: 'rgb(2, 27, 7)' }}>
      <Carousel
        arrows
        dotPosition="right"
        infinite={true}
        autoplay={true}
        autoplaySpeed={2000}
        fade={true}
        waitForAnimate={true}
        speed={1200}
        className="carousel"
      >
        <div className="item-1" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_1_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  className="text_typing"
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>

        <div className="item-2" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>

        <div className="item-3" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>

        <div className="item-4" id="item">
          <div id="items_con">
            {/* <article className="item_content">
              <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1>
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article> */}
          </div>
        </div>

        <div className="item-5" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>

        <div className="item-6" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>

        <div className="item-7" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>
        <div className="item-8" id="item">
          <div id="items_con">
            <article className="item_content">
              {/* <h1>
                <TypeAnimation
                  sequence={[
                    t('item_2_heading'),
                    1000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text_typing"
                />
              </h1> */}
              <p>
                <span>{t('carousel.description')}</span>
              </p>
              <button>{t('carousel.shop_now')}</button>
            </article>
          </div>
        </div>
        {/* Repeat similar code for item-3 and item-4 if needed */}

      </Carousel>
    </div>
  );
};

export default CarouselComponent;
