'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DestinationItemTwo from './destination-item/destination-item-two';
import { destinationDataThree } from '@/data/destination-data';

import shapeImg from '@/assets/img/home-2/destination/shape/d-walk.png';

const DestinationThree = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '768': {
        slidesPerView: 4,
      },
      '576': {
        slidesPerView: 3,
      },
      '0': {
        slidesPerView: 1,
      },
    },
    navigation: {
      prevEl: '.destination-2-prev',
      nextEl: '.destination-2-next',
    },
  };
  return (
    <div className="it-destination-2-area fix it-destination-2-pt p-relative pt-120 pb-120 fix">
      <div className="it-destination-2-shape-box">
        <div className="it-destination-2-shape-1 d-none d-sm-block">
          <Image src={shapeImg} alt="Shape Img" width={320} height={257} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="it-destination-2-content">
              <span className="it-section-subtitle">DESTINATION LIST</span>
              <h3 className="it-section-title">
                Explore the Beautiful Places Around World
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do..
              </p>
            </div>
            <div className="it-destination-2-button">
              <Link href="/about" className="it-btn-primary">
                Discover More
              </Link>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="it-destination-2-slider-wrap p-relative">
              <div className="swiper-container it-destination-2-active">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {destinationDataThree.map((destination) => (
                    <SwiperSlide key={destination.id} className="swiper-slide">
                      <DestinationItemTwo destination={destination} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="it-destination-2-arrow-box d-none d-md-block">
                <button className="destination-2-prev it-slide-btn-1">
                  <i className="flaticon-left-chevron"></i>
                </button>
                <button className="destination-2-next it-slide-btn-2">
                  <i className="flaticon-chevron"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationThree;
