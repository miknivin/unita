'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { testimonialDataTwo } from '@/data/testimonial-data';

import shapeImg1 from '@/assets/img/home-2/testimonial/shape/test-2.1.png';
import shapeImg2 from '@/assets/img/home-2/testimonial/shape/test-2.2.png';
import testimonialImg from '@/assets/img/home-2/testimonial/thumb/test-2-1.jpg';

const TestimonialTwo = () => {
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
    <div className="it-testi-2-area pt-120 pb-120 p-relative">
      <div className="it-testi-2-shape-box d-none d-md-block">
        <div className="it-testi-2-shape-top">
          <Image src={shapeImg1} alt="Shape Img" width={105} height={95} />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-8">
            <div className="it-testi-2-title-box">
              <span className="it-section-subtitle">Testimonial</span>
              <h3 className="it-section-title">
                What our Customers are <span>saying us?</span>
              </h3>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-4 col-sm-4">
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
        <div className="it-testi-2-wrap mt-70">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4">
              <div className="it-testi-2-thumb-box d-none d-lg-block text-center p-relative">
                <div className="it-testi-2-shape d-none d-lg-block">
                  <Image
                    src={shapeImg2}
                    alt="Shape Img"
                    width={85}
                    height={78}
                  />
                </div>
                <div className="it-testi-2-thumb">
                  <Image
                    src={testimonialImg}
                    alt="Testimonial Img"
                    width={300}
                    height={400}
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="it-testi-2-content theme-bg">
                <div className="swiper-container it-testi-2-active">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    {...sliderOption}
                    className="swiper-wrapper"
                  >
                    {testimonialDataTwo.map((testimonial) => (
                      <SwiperSlide
                        key={testimonial.id}
                        className="swiper-slide"
                      >
                        <div className="it-testi-2-item">
                          <div className="it-testi-2-dsc mb-15">
                            <i>{testimonial.description}</i>
                          </div>
                          <div className="it-testi-2-avater-content d-flex align-items-center justify-content-between">
                            <div className="it-testi-2-avater-info">
                              <h3 className="it-testi-2-avater-title mb-10">
                                {testimonial.author}
                              </h3>
                              <span>{testimonial.designation}</span>
                            </div>
                            <div className="it-testi-2-avater-quote">
                              <i className="fa-solid fa-quote-right"></i>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialTwo;
