import Image from 'next/image';
import { LikeSvg, TagSvg, UserSvg, CloudSvg } from '../svg';

import aboutImg from '@/assets/img/home-3/about/thumb/about-3-1.png';
import shapeImg from '@/assets/img/home-3/about/shape/rocket.png';

const aboutData = [
  {
    id: 1,
    icon: <UserSvg />,
    title: 'Tour Guide',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 2,
    icon: <LikeSvg />,
    title: 'Reliable Tour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 3,
    icon: <TagSvg />,
    title: 'Friendly Price',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

const AboutThree = () => {
  return (
    <div
      className="it-about-area it-about-style-3 it-about-style-3-bg grey-bg-2 pt-105 pb-110 p-relative fix"
      style={{
        backgroundImage: `url('/assets/img/home-3/about/about-3-bg.jpg')`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 oder-md-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="it-about-content p-relative">
              <div className="it-about-title-box mb-20">
                <span className="it-section-subtitle">About Company</span>
                <h3 className="it-section-title mb-20">
                  We are professional Planner for your travel
                </h3>
              </div>
              {aboutData.map((about) => (
                <div
                  key={about.id}
                  className="it-about-service-item mb-40 d-flex align-items-center"
                >
                  <div className="it-about-service-icon mr-20">
                    <span>{about.icon}</span>
                  </div>
                  <div className="it-about-service-text">
                    <h3 className="it-about-service-title">{about.title}</h3>
                    <p>{about.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 oder-md-1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="it-about-thumb-wrap d-flex justify-content-center">
              <div className="it-about-main-thumb z-index p-relative">
                <Image
                  src={aboutImg}
                  alt="About Img"
                  width={442}
                  height={584}
                  style={{ height: 'auto' }}
                />
                <span className="it-about-thumb-shape"></span>
                <div className="it-about-thumb-rocket d-none d-sm-block">
                  <Image
                    src={shapeImg}
                    alt="Shape Img"
                    width={341}
                    height={123}
                  />
                </div>
                <div className="it-about-thumb-cloud-1">
                  <span>
                    <CloudSvg />
                  </span>
                </div>
                <div className="it-about-thumb-cloud-2">
                  <span>
                    <CloudSvg />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutThree;
