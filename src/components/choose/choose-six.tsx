import Image from 'next/image';

import chooseImg1 from '@/assets/img/home-5/chooseus/chos-4-1.jpg';
import chooseImg2 from '@/assets/img/home-5/chooseus/chos-4-2.jpg';
import chooseImg3 from '@/assets/img/home-5/chooseus/chos-4-3.jpg';
import chooseImg4 from '@/assets/img/home-5/chooseus/chos-4-4.jpg';
import chooseImg5 from '@/assets/img/home-5/chooseus/chos-4-5.jpg';
import chooseImg6 from '@/assets/img/home-5/chooseus/chos-4-6.jpg';
import chooseImg7 from '@/assets/img/home-5/chooseus/chos-4-7.jpg';
import Link from 'next/link';

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

const ChooseSix = () => {
  return (
    <div
      className="it-chooseus-4 it-chooseus-6 it-chooseus-6-bg grey-bg p-relative pt-120 pb-120"
      style={{
        backgroundImage: `url('/assets/img/home-5/chooseus/chos-6-bg.png')`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-chooseus-thumb-box mr-45 p-relative">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="it-chooseus-thumb-left">
                    <div className="it-chooseus-thumb-1 mb-55">
                      <Image
                        src={chooseImg1}
                        alt="Choose Img"
                        width={220}
                        height={169}
                        style={{ height: 'auto' }}
                      />
                    </div>
                    <div className="it-chooseus-thumb-2">
                      <Image
                        src={chooseImg2}
                        alt="Choose Img"
                        width={201}
                        height={190}
                        style={{ height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 g-0">
                  <div className="it-chooseus-thumb-middle">
                    <div className="it-chooseus-thumb-3 text-center text-sm-end mb-20">
                      <Image
                        src={chooseImg3}
                        alt="Choose Img"
                        width={167}
                        height={145}
                        style={{ height: 'auto' }}
                      />
                    </div>
                    <div className="it-chooseus-thumb-4 mb-20">
                      <Image
                        src={chooseImg4}
                        alt="Choose Img"
                        width={226}
                        height={256}
                        style={{ height: 'auto' }}
                      />
                    </div>
                    <div className="it-chooseus-thumb-5">
                      <Image
                        src={chooseImg5}
                        alt="Choose Img"
                        width={153}
                        height={158}
                        style={{ height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="it-chooseus-thumb-right">
                    <div className="it-chooseus-thumb-6 mb-55">
                      <Image
                        src={chooseImg6}
                        alt="Choose Img"
                        width={160}
                        height={176}
                        style={{ height: 'auto' }}
                      />
                    </div>
                    <div className="it-chooseus-thumb-7">
                      <Image
                        src={chooseImg7}
                        alt="Choose Img"
                        width={153}
                        height={184}
                        style={{ height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-chooseus-title-box">
              <span className="it-section-subtitle">Get To Know Us</span>
              <h3 className="it-section-title mb-30">
                Why you should choose our company
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="it-chooseus-service mb-20">
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
        </div>
      </div>
    </div>
  );
};
export default ChooseSix;
