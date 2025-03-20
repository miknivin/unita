import Image from 'next/image';
import Link from 'next/link';

import shapeImg1 from '@/assets/img/home-2/chooseus/shape/ballon-1.png';
import shapeImg2 from '@/assets/img/home-3/chooseus/shape/w-right.png';
import shapeImg3 from '@/assets/img/home-3/chooseus/shape/rocket.png';
import chooseImg1 from '@/assets/img/home-3/chooseus/thumb/choose-3-1.jpg';
import chooseImg2 from '@/assets/img/home-3/chooseus/thumb/choose-3-2.jpg';

const ChooseThree = () => {
  return (
    <div className="it-chooseus-2 it-chooseus-3 pt-120 pb-120 p-relative">
      <div className="it-chooseus-2-shape-box">
        <div className="it-chooseus-2-shape-1 d-none d-xxl-block">
          <Image src={shapeImg1} alt="Shape Img" width={139} height={191} />
        </div>
        <div className="it-chooseus-2-shape-2">
          <Image src={shapeImg2} alt="Shape Img" width={320} height={257} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 oder-md-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="it-about-content p-relative">
              <div className="it-about-title-box mb-30">
                <span className="it-section-subtitle">What we do</span>
                <h3 className="it-section-title mb-20">
                  Travel to make memories all around the world
                </h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="flaticon-tour-guide"></i>
                  </span>
                </div>
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">
                    Completed Training Guide
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do..
                  </p>
                </div>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="flaticon-travel"></i>
                  </span>
                </div>
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">
                    World Insurance Included
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do..
                  </p>
                </div>
              </div>
              <Link href="/about" className="it-btn-primary">
                Discover More
              </Link>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 oder-md-1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="it-chooseus-thumb-box ml-10 p-relative">
              <div className="it-chooseus-main-thumb">
                <Image
                  src={chooseImg1}
                  alt="Choose Img"
                  width={378}
                  height={500}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-chooseus-thumb-1">
                <Image
                  src={chooseImg2}
                  alt="Choose Img"
                  width={300}
                  height={368}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-chooseus-thumb-shape d-none d-xl-block">
                <Image
                  src={shapeImg3}
                  alt="Shape Img"
                  width={341}
                  height={123}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseThree;
