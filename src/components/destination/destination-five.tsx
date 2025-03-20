'use client';

import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { destinationDataFive } from '@/data/destination-data';
import DestinationItemFour from './destination-item/destination-item-four';

const DestinationFive = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 6,
      },
      '1200': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 3,
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
    <div className="it-destination-area it-popular-style p-relative pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
            <div className="it-destination-title-box mb-50">
              <span className="it-section-subtitle">Popular</span>
              <h3 className="it-section-title">Popular Things to do</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4">
            <div className="it-popular-button">
              <Link href="/destination" className="it-btn-primary">
                See all
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-destination-slider-wrap">
              <div className="swiper-container it-popular-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {destinationDataFive.map((destination) => (
                    <SwiperSlide key={destination.id} className="swiper-slide">
                      <DestinationItemFour destination={destination} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationFive;
