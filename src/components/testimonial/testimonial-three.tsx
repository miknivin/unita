'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { testimonialDataThree } from '@/data/testimonial-data';

import shapeImg from '@/assets/img/home-3/testimonial/testi-3-shape.png';
import testimonialImg from '@/assets/img/home-3/testimonial/thumb-3-1.jpg';

const TestimonialThree = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
      prevEl: '.testi-2-prev',
      nextEl: '.testi-2-next',
    },
  };
  return (
    <div
      className="it-testimonial-area it-testi-style-3 it-testi-style-3-bg p-relative fix black-bg pt-105 pb-90"
      style={{
        backgroundImage: `url('/assets/img/home-3/testimonial/testi-3-bg.png')`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="it-testimonial-thumb p-relative">
              <div className="it-testimonial-shape-1">
                <Image
                  src={shapeImg}
                  alt="Shape Img"
                  width={126}
                  height={134}
                />
              </div>
              <Image
                src={testimonialImg}
                alt="Testimonial Img"
                width={401}
                height={414}
                style={{ height: 'auto' }}
              />

              <span className="thumb-shape-1 d-none d-lg-block"></span>
              <span className="thumb-shape-2 d-none d-lg-block"></span>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="it-testimonial-wrapper p-relative">
              <div className="swiper-container it-testi-3-active">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {testimonialDataThree.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="swiper-slide">
                      <div className="it-testimonial-content">
                        <div className="it-testimonial-dsc p-relative">
                          <i className="fa-solid fa-quote-right qoute-1"></i>
                          <p>{testimonial.description}</p>
                        </div>
                        <div className="it-testimonial-avater d-flex align-items-center">
                          <div className="it-testimonial-avater-thumb">
                            {testimonial.avatar && (
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                width={70}
                                height={70}
                              />
                            )}
                          </div>
                          <div className="it-testimonial-avater-info">
                            <h3 className="it-testimonial-avater-title">
                              {testimonial.author}
                            </h3>
                            <span className="it-testimonial-avater-designation">
                              {testimonial.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="it-testi-2-arrow-box text-end">
                <button className="testi-2-prev">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="testi-2-prev testi-2-next">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialThree;
