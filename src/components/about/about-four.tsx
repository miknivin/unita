import Image from "next/image";
import Counter from "../funfact/counter-item/counter-item";
import { AboutShapeOne, AboutShapeTwo, RightArrow } from "../svg";

import aboutImg1 from "@/assets/img/inner-page/about/inner-ab-1-1.jpg";
import aboutImg2 from "@/assets/img/inner-page/about/inner-ab-1-2.jpg";
import aboutImg3 from "@/assets/img/inner-page/about/inner-ab-1-3.jpg";

const counterData = [
  {
    id: 1,
    countNum: 7,
    countSubtext: "+",
    countTitle: "Years of Experience ",
  },
  {
    id: 2,
    countNum: 50000,
    countSubtext: "+",
    countTitle: "Candidates Placed",
  },
  {
    id: 3,
    countNum: 2000,
    countSubtext: "+",
    countTitle: "Successful Trips",
  },
];

const AboutFour = () => {
  return (
    <div className="it-about-area inner-about-style pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-thumb-wrap d-sm-flex align-items-center justify-content-center justify-content-lg-stretch">
              {/* <div className="it-about-thumb-box d-flex flex-column">
    <div className="it-about-thumb-1 text-center text-sm-end">
      <Image
        src={aboutImg1}
        alt="About Img"
        width={222}
        height={222}
        style={{ height: 'auto' }}
      />
    </div>
    <div className="it-about-thumb-2">
      <Image
        src={aboutImg2}
        alt="About Img"
        width={335}
        height={385}
        style={{ height: 'auto' }}
      />
    </div>
  </div> */}
              <div className="it-about-thumb-single text-center text-sm-start w-100">
                {/* <div className="it-about-thumb-shape d-none d-sm-block">
      <AboutShapeOne />
    </div> */}
                <Image
                  src={aboutImg3}
                  alt="About Img"
                  className="mb-30 w-100"
                  width={270}
                  height={278}
                  style={{ height: "auto", width: "100%" }}
                />
                {/* <div className="it-about-experience p-relative">
      <div className="it-about-experience-icon">
        <span>
          <AboutShapeTwo />
        </span>
      </div>
      <h3 className="it-about-experience-number">
        <Counter
          start={0}
          end={29}
          duration={3}
          counterSubText="+"
        />
      </h3>
      <i>years of experience.</i>
    </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-title-box mb-30">
              <span className="it-section-subtitle">about us</span>
              <h2 className="it-section-title mb-20">
                Sollicitudin Vestibulum Vulputate Ipsum.
              </h2>
              <p>
                Seven years ago, we embarked on a mission to become the leading
                Travel & Tourism and Recruitment Agency in Cameroon. With a deep
                understanding of the market and time-tested strategies, we have
                consistently met the needs of our clients, helping businesses
                grow while providing exceptional travel experiences.
              </p>
              <p>
                Over the years, we have risen to become the No.1 travel and
                recruitment agency in Cameroon, organizing successful trips and
                placing over 50,000 unskilled workers, professionals, and
                graduates across the GCC region. Our commitment to excellence
                has earned us the trust of our clients, allowing us to continue
                delivering top-tier hiring solutions and unforgettable journeys.
              </p>
            </div>
            <div className="it-about-counter-box mb-20">
              <div className="row">
                {counterData.map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                  >
                    <div className="it-about-counter-text">
                      <h3 className="it-about-counter-number">
                        <Counter
                          start={0}
                          end={item.countNum}
                          duration={2}
                          counterSubText={item.countSubtext}
                        />
                      </h3>
                      <p>{item.countTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="it-about-counter-button">
              <a href="#" className="it-btn-primary">
                <span>
                  Discover More
                  <RightArrow />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutFour;
