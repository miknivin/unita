import Image from 'next/image';
import Link from 'next/link';

import shapeImg1 from '@/assets/img/home-3/hero/shape/star.png';
import shapeImg2 from '@/assets/img/home-3/hero/shape/ballon.png';
import customerImg from '@/assets/img/home-3/hero/shape/customer.png';
import heroBigImg from '@/assets/img/home-3/hero/thumb/hero-big-thumb.jpg';
import heroSmImg from '@/assets/img/home-3/hero/thumb/hero-sm-thumb.jpg';

const HeroBannerThree = () => {
  return (
    <div
      className="it-hero-area fix it-hero-overlay it-hero-height it-hero-bg p-relative"
      style={{ backgroundImage: `url('/assets/img/home-3/hero/hero-bg.jpg')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="it-hero-content-wrap p-relative">
              <div className="it-hero-content-shape d-none d-md-block">
                <Image src={shapeImg1} alt="" width={70} height={72} />
              </div>
              <div className="it-hero-title-box mb-30">
                <span
                  className="it-section-subtitle"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Book Now----trip
                </span>
                <h3
                  className="it-section-title mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Let’s Enjoy Your Trip <br />
                  With Trip Goal
                </h3>
                <p
                  className="wow itfadeUp"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam,
                </p>
              </div>
              <div
                className="it-hero-button-area d-flex align-items-center wow itfadeUp"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <div className="it-hero-action mr-20">
                  <Link href="/about" className="it-btn-primary">
                    Discover More
                  </Link>
                </div>
                <div className="it-hero-customer-box-wrap d-none d-sm-block">
                  <div className="it-hero-customer-box d-flex align-items-center">
                    <div className="it-hero-customer-thumb mr-15">
                      <Image
                        src={customerImg}
                        alt="Image"
                        width={106}
                        height={40}
                      />
                    </div>
                    <div className="it-hero-customer-text">
                      <span>
                        MORE THAN 10K+
                        <br />
                        TRUSTED CUSTOMERS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="it-hero-thumb-box p-relative">
              <div className="it-hero-thumb-shape d-none d-sm-block">
                <Image
                  src={shapeImg2}
                  alt="Shape Img"
                  width={95}
                  height={103}
                />
              </div>
              <div className="it-hero-thumb p-relative">
                <Image
                  src={heroBigImg}
                  alt="Image"
                  width={400}
                  height={600}
                  style={{ height: 'auto' }}
                />
                <div className="it-hero-sub-thumb">
                  <Image
                    src={heroSmImg}
                    alt="Image"
                    width={270}
                    height={450}
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerThree;
