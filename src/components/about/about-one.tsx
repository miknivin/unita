import Image from "next/image";
import Link from "next/link";

import shapeImg1 from "@/assets/img/home-1/about/shape/cloud.png";
import shapeImg2 from "@/assets/img/home-1/about/shape/rocket.png";
import aboutImg1 from "@/assets/img/home-1/about/img/img-1.jpg";
import aboutImg2 from "@/assets/img/home-1/about/img/img-2.jpg";
import aboutImg3 from "@/assets/img/home-1/about/img/img-3.jpg";

const AboutOne = () => {
  return (
    <div
      className="it-about-area it-about-bg pt-120 pb-175 p-relative grey-bg"
      style={{ backgroundImage: `url(/assets/img/home-1/about/about-bg.png)` }}
    >
      <div className="it-about-shape-box">
        <div className="it-about-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={169}
            height={79}
            style={{ height: "auto" }}
          />
        </div>
        <div className="it-about-shape-2 d-none d-xxl-block">
          <Image src={shapeImg2} alt="Shape Img" width={341} height={123} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 oder-md-1"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="it-about-thumb-wrap">
              <div className="it-about-main-thumb p-relative text-center">
                <Image
                  src={aboutImg1}
                  alt="About Img"
                  width={419}
                  height={350}
                  style={{ height: "auto" }}
                />
                <div className="it-about-sub-thumb-1 d-none d-lg-block">
                  <Image
                    src={aboutImg2}
                    alt="About Img"
                    width={264}
                    height={265}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="it-about-sub-thumb-2 d-none d-lg-block">
                  <Image
                    src={aboutImg3}
                    alt="About Img"
                    width={244}
                    height={244}
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 oder-md-0"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="it-about-content">
              <div className="it-about-title-box mb-20">
                {/* <span className="it-section-subtitle">About Company</span> */}
                <h3 className="it-section-title mb-20">Our Mission & Vision</h3>
                <p className="text-black">
                  Driven by a passion for excellence, we strive to empower
                  individuals and businesses through career opportunities and
                  unforgettable travel experiences. With a commitment to quality
                  and innovation, we bridge the gap between talent and employers
                  while inspiring people to explore the world with confidence.
                </p>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                {/* <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="flaticon-worker"></i>
                  </span>
                </div> */}
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">Our Mission</h3>
                  <p>
                    Our mission is to empower companies and individuals by
                    guiding them through job roles and equipping them with the
                    competitive skills needed to succeed in today’s business
                    world. We strive to connect talent with the right
                    opportunities while also curating unforgettable travel
                    experiences. Whether organizing trips for tourists,
                    individuals, or groups, we ensure seamless journeys across
                    the breathtaking cities of the Gulf Region, America, and
                    Europe, creating lasting memories and meaningful
                    connections.
                  </p>
                </div>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                {/* <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="flaticon-tour-guide"></i>
                  </span>
                </div> */}
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">Our Vision</h3>
                  <p>
                    Our vision is to create a world where travel is not just a
                    luxury but an accessible and enriching experience for
                    everyone. We aim to inspire people to explore new
                    destinations by connecting them to meaningful and positive
                    experiences that broaden their perspectives. Through
                    seamless travel planning and exceptional service, we enable
                    individuals to see the world differently, fostering cultural
                    appreciation, personal growth, and unforgettable memories.
                  </p>
                </div>
              </div>
              {/* <Link href="/about" className="it-btn-primary">
                Discover More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutOne;
