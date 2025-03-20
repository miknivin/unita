import Image from 'next/image';
import Link from 'next/link';

import shapeImg1 from '@/assets/img/home-2/chooseus/shape/ballon-1.png';
import shapeImg2 from '@/assets/img/home-2/chooseus/shape/walk-1.png';
import shapeImg3 from '@/assets/img/home-2/chooseus/shape/star.png';
import chooseImg1 from '@/assets/img/home-2/chooseus/thumb/choose-2-1.jpg';
import chooseImg2 from '@/assets/img/home-2/chooseus/thumb/choose-2-2.jpg';

const chooseData = [
  {
    id: 1,
    icon: 'flaticon-tour-guide',
    title: 'Completed Training Guide',
    description:
      '   Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.',
  },
  {
    id: 2,
    icon: 'flaticon-travel',
    title: 'World Insurance Included',
    description:
      '   Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.',
  },
];

const ChooseTwo = () => {
  return (
    <div className="it-about-area it-chooseus-2 pt-120 pb-120 p-relative">
      <div className="it-chooseus-2-shape-box">
        <div className="it-chooseus-2-shape-1 d-none d-xxl-block">
          <Image src={shapeImg1} alt="Shape Img" width={139} height={191} />
        </div>
        <div className="it-chooseus-2-shape-2 d-none d-xxl-block">
          <Image src={shapeImg2} alt="Shape Img" width={320} height={257} />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 oder-md-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="it-choosus-2-thumb-box">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="it-chooseus-2-thumb p-relative">
                    <Image
                      src={chooseImg1}
                      alt="Choose Img"
                      width={270}
                      height={500}
                      style={{ height: 'auto' }}
                    />
                    <div className="it-chooseus-2-star">
                      <Image
                        src={shapeImg3}
                        alt="Shape Img"
                        width={70}
                        height={72}
                        style={{ height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="it-chooseus-2-thumb mt-90">
                    <Image
                      src={chooseImg2}
                      alt="Choose Img"
                      width={300}
                      height={556}
                      style={{ height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 oder-md-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="it-about-content ml-45 p-relative">
              <div className="it-about-title-box mb-30">
                <span className="it-section-subtitle">What we do</span>
                <h3 className="it-section-title mb-20">
                  Best Overworld Travel Guide Agency Services
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              {chooseData.map((choose) => (
                <div
                  key={choose.id}
                  className="it-about-service-item mb-40 d-flex align-items-center"
                >
                  <div className="it-about-service-icon mr-20">
                    <span>
                      <i className={choose.icon}></i>
                    </span>
                  </div>
                  <div className="it-about-service-text">
                    <h3 className="it-about-service-title">{choose.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: choose.description }}
                    ></p>
                  </div>
                </div>
              ))}

              <Link href="/about" className="it-btn-primary">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseTwo;
