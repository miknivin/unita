import Image from "next/image";
import {
  ChooseSvg1,
  ChooseSvg2,
  ChooseSvg3,
  ChooseSvg4,
  ChooseSvg5,
} from "../svg";

import shapeImg from "@/assets/img/inner-page/chooseuse/inn-chooseus-shape.jpg";
import chooseImg from "@/assets/img/inner-page/chooseuse/inn-chooseus1.webp";

const chooseData = [
  [
    {
      id: 1,
      icon: <ChooseSvg1 />,
      title: "Travel & Tour Packages",
      description:
        "We offer carefully curated travel experiences, from adventure trips to luxury vacations, ensuring unforgettable journeys.",
    },
    {
      id: 2,
      icon: <ChooseSvg2 />,
      title: "Worldwide Visa Consultancy/Assistance",
      description:
        "Our experts provide seamless visa processing and guidance, making international travel hassle-free.",
    },
    {
      id: 5,
      icon: <ChooseSvg3 />,
      title: "Job Placements Worldwide",
      description:
        "We assist professionals in securing job opportunities across various industries in global markets.",
    },
  ],
  [
    {
      id: 3,
      icon: <ChooseSvg3 />,
      title: "Worldwide Flight Ticketing",
      description:
        "We help travelers book the best flight deals worldwide, ensuring convenience and cost-effectiveness.",
    },
    {
      id: 4,
      icon: <ChooseSvg4 />,
      title: "Recruitment Consultancy",
      description:
        "We connect businesses with top talent, providing expert recruitment strategies tailored to industry needs.",
    },
    {
      id: 6,
      icon: <ChooseSvg4 />,
      title: "HR Solutions",
      description:
        "Our HR services support businesses with workforce planning, talent management, and streamlined hiring processes.",
    },
  ],
];

const ChooseSeven = () => {
  return (
    <div className="it-chooseus-3 it-chooseus-5 it-inner-chooseus pt-120 pb-120 p-relative">
      <div className="it-inner-chooseus-shape-box">
        <div className="it-inner-chooseus-shape-1">
          <Image src={shapeImg} alt="Shape Img" width={313} height={311} />
        </div>
        <div className="it-inner-chooseus-shape-2">
          <span>
            <ChooseSvg5 />
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="it-about-content p-relative">
              <div className="it-chooseus-title-box mb-30">
                {/* <span className="it-section-subtitle">What we do</span> */}
                <h3 className="it-section-title mb-20">What we do</h3>
                <p>
                  We provide comprehensive solutions in travel, recruitment, and
                  human resources, ensuring seamless experiences for both
                  individuals and businesses. From organizing unforgettable
                  trips to connecting talent with global opportunities, our
                  expertise allows us to cater to diverse needs with
                  professionalism and efficiency.
                </p>
              </div>
              <div className="row">
                {chooseData.map((choose, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                  >
                    {choose.map((item) => (
                      <div
                        key={item.id}
                        className="it-about-service-item mb-40"
                      >
                        <div className="it-about-service-icon mr-20">
                          <span>{item.icon}</span>
                        </div>
                        <div className="it-about-service-text">
                          <h3 className="it-about-service-title">
                            {item.title}
                          </h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="it-chooseus-thumb-box ml-10 p-relative">
              <div className="it-chooseus-main-thumb text-center text-lg-end">
                <Image
                  src={chooseImg}
                  alt="Choose Img"
                  width={581}
                  height={700}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseSeven;
