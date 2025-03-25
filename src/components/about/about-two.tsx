import Image from "next/image";
import Link from "next/link";
import Counter from "../funfact/counter-item/counter-item";

import shapeImg1 from "@/assets/img/home-2/about/shape/Ballon-1.png";
import shapeImg2 from "@/assets/img/home-2/about/shape/star.png";
import aboutBigImg from "@/assets/img/home-2/about/img/big-thumb.png";
import aboutSmImg from "@/assets/img/home-2/about/img/small-thumb.png";

const AboutTwo = () => {
  return (
    <div className="it-about-area it-about-style-2 pt-120 pb-120 p-relative">
      <div className="it-about-shape-box">
        {/* <div className="it-about-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={139}
            height={191}
            style={{ height: 'auto' }}
          />
        </div> */}
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 oder-md-0">
            <div className="it-about-content p-relative">
              <div className="it-about-shape-2 d-none d-xxl-block">
                {/* <Image src={shapeImg2} alt="Shape Img" width={70} height={72} /> */}
              </div>
              <div className="it-about-title-box mb-20">
                <span className="it-section-subtitle">About Company</span>
                <h3 className="it-section-title mb-20">
                  Your Trusted Partner in Travel & Recruitment
                </h3>
                <p className="text-black">
                  With 7+ years of expertise, UNITAG Ltd is Cameroon’s No.1
                  Travel & Recruitment Agency, delivering world-class trips and
                  50,000+ job placements across GCC, America & Europe. Our
                  excellence has earned the trust of individuals and businesses
                  worldwide.
                </p>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="fa-regular fa-hand-holding-heart"></i>
                  </span>
                </div>
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">
                    Empowering Careers & Businesses
                  </h3>
                  <p>
                    Helping individuals navigate job roles and <br />
                    companies hire top talent.
                  </p>
                </div>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="fa-regular fa-notebook"></i>
                  </span>
                </div>
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">
                    Unforgettable Travel Experiences
                  </h3>
                  <p>
                    Organizing memorable trips across the Gulf Region, America &
                    Europe.
                  </p>
                </div>
              </div>
              <Link href="/about" className="it-btn-primary">
                Discover More
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 oder-md-1">
            <div className="it-about-thumb-wrap d-flex justify-content-sm-center justify-content-md-end">
              <div className="it-about-main-thumb p-relative">
                <Image
                  src={aboutBigImg}
                  alt="About Img"
                  width={470}
                  height={676}
                  style={{ height: "auto" }}
                />

                <div
                  className="it-about-experience-box theme-bg-2 d-flex align-items-center"
                  style={{
                    backgroundImage: `url('/assets/img/home-2/about/shape/experience.png')`,
                  }}
                >
                  <h3 className="it-about-experience-title">
                    <Counter
                      start={0}
                      end={25}
                      duration={3}
                      counterSubText="+"
                    />
                    Years
                  </h3>
                  <span className="it-about-experience-text">
                    of experience in services
                  </span>
                </div>
                <div className="it-about-sub-thumb d-none d-md-block">
                  <Image
                    src={aboutSmImg}
                    alt="About Img"
                    width={230}
                    height={300}
                    style={{ height: "auto" }}
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
export default AboutTwo;
