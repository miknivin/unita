import Image from 'next/image';
import Link from 'next/link';
import Counter from '../funfact/counter-item/counter-item';

import shapeImg1 from '@/assets/img/home-1/chooseus/shape/walk.png';
import shapeImg2 from '@/assets/img/home-4/choosus/ballon.png';
import chooseImg from '@/assets/img/home-4/choosus/thumb/chooseus-2-1.jpg';

const chooseData = [
  {
    id: 1,
    icon: 'fa-regular fa-badge-check',
    title: 'professional & certified',
  },
  {
    id: 2,
    icon: 'fa-regular fa-house-heart',
    title: 'Get instant tour bookings',
  },
];

const ChooseFour = () => {
  return (
    <div className="it-chooseus-area it-chooseus-4 p-relative pt-120 pb-120">
      <div className="it-chooseus-shape-box">
        <div className="it-chooseus-shape-1 d-none d-xxl-block">
          <Image src={shapeImg1} alt="Shape Img" width={320} height={257} />
        </div>
        <div className="it-chooseus-4-shape-2">
          <Image src={shapeImg2} alt="Shape Img" width={95} height={130} />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-chooseus-title-box">
              <span className="it-section-subtitle">why Choose us</span>
              <h3 className="it-section-title mb-30">
                Why you should choose our company
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="it-chooseus-service mb-40">
              <div className="row">
                {chooseData.map((choose) => (
                  <div key={choose.id} className="col-xl-6 col-md-6">
                    <div className="it-chooseus-service-content d-flex align-items-center">
                      <div className="it-chooseus-service-icon">
                        <i className={choose.icon}></i>
                      </div>
                      <h3 className="it-chooseus-service-title">
                        {choose.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="it-chooseus-button-box d-flex align-items-center">
              <div className="it-chooseus-button mr-30">
                <Link href="/about" className="it-btn-primary">
                  Discover More
                </Link>
              </div>
              <div className="it-chooseus-contact d-flex align-items-center">
                <div className="it-chooseus-contact-icon">
                  <i className="flaticon-chat"></i>
                </div>
                <div className="it-chooseus-contact-text">
                  <span>Emergency</span>
                  <a href="tel:99012356987">(+99) 012356987</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-chooseus-thumb-box ml-35 p-relative">
              <div className="it-chooseus-thumb mb-20">
                <Image
                  src={chooseImg}
                  alt="Choose Img"
                  width={530}
                  height={434}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-chooseus-rating-box">
                <div className="it-chooseus-rating-content d-flex align-items-center">
                  <div className="it-chooseus-rating-icon">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <div className="it-chooseus-rating-text">
                    <h3 className="it-chooseus-rating-title">
                      <Counter
                        start={0}
                        end={3500}
                        duration={2}
                        counterSubText="+"
                      />
                    </h3>
                    <p>satisfied customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseFour;
