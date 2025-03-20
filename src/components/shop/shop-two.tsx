'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import { productDataTwo } from '@/data/product-data';
import ShopItemTwo from './shop-item/shop-item-two';

import shapeImg from '@/assets/img/home-2/shop/sun-glass.png';

const ShopTwo = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 3,
      },
      '992': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className="it-shop-area it-shop-style-2 p-relative pt-120 pb-120 grey-bg"
      style={{ backgroundImage: `url('/assets/img/home-1/shop/shop-bg.png')` }}
    >
      <div className="it-shop-shape d-none d-md-block">
        <Image src={shapeImg} alt="Shape Img" width={138} height={123} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="it-shop-title-box mb-60 text-center">
            <span className="it-section-subtitle">Shop</span>
            <h3 className="it-section-title">Our special product</h3>
          </div>
        </div>
        <div className="swiper-container it-shop-2-active">
          <Swiper
            modules={[Autoplay]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            {productDataTwo
              .map((product) => (
                <SwiperSlide key={product.id} className="swiper-slide">
                  <ShopItemTwo product={product} />
                </SwiperSlide>
              ))
              .slice(0, 5)}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ShopTwo;
