import Image from "next/image";
import TourDetailsFaq from "@/components/tour/details/tour-details-faq";
import TourDetailsReview from "./tour-details-review";
import ReviewBox from "./review-box";
import { servicesDataThree } from "@/data/tour-packages-data";
import ServiceItemFour from "../tour-item/tour-item-four";
import DetailsSidebar from "./details-sidebar";
import { IServiceDT } from "@/types/tour-packages-d-t";
import { updatePrice } from "@/utils/helper";
import {
  AirplaneSvg,
  CarSvg,
  ClockSvg,
  DollarSvg,
  FoodContainerSvg,
  LocationSvgTwo,
  SecurityShieldSvg,
  SettingsSvg,
  StarSvgTwo,
  WiFiSvg,
} from "@/components/svg";

import detailsImg1 from "@/assets/img/inner-page/discover/discover-2.jpg";
import { CheckMarkSvg } from "@/components/svg/tour-details-svg";

interface ServiceDetailsProps {
  service: IServiceDT;
}

const ServicesDetailsArea = ({ service }: ServiceDetailsProps) => {
  return (
    <div className="it-discover-area pt-120 pb-120p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            {/* <div className="it-descover-meta-box mb-30 d-flex justify-content-between">
              <div className="it-discover-meta d-flex align-items-center">
                <span className="it-discover-meta-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                {service.address}
              </div>
              <div className="it-discover-meta-review d-flex align-items-center">
                <span className="it-discover-meta-review-icon">
                  <i className="fa-sharp fa-solid fa-star"></i>
                </span>
                <p>
                  {service.rating} <span>({service.review}k review)</span>
                </p>
              </div>
            </div> */}
            <h3 className="it-section-title mb-40">{service.title}</h3>
            {/* <div className="it-discover-cat-wrap mb-35">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="it-discover-cat-wrap d-flex align-items-center">
                    <div className="it-discover-cat-item d-flex">
                      <div className="it-discover-cat-icon">
                        <span>
                          <DollarSvg />
                        </span>
                      </div>
                      <div className="it-discover-cat-text">
                        <p>
                          From <br />
                          <span>
                            ${Math.round(updatePrice(service)).toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="it-discover-cat-item d-flex">
                      <div className="it-discover-cat-icon">
                        <span>
                          <ClockSvg />
                        </span>
                      </div>
                      <div className="it-discover-cat-text">
                        <p>
                          Duration <br />
                          <span>{service.duration} days</span>
                        </p>
                      </div>
                    </div>
                    <div className="it-discover-cat-item d-flex">
                      <div className="it-discover-cat-icon">
                        <span>
                          <LocationSvgTwo />
                        </span>
                      </div>
                      <div className="it-discover-cat-text">
                        <p>
                          Tour Type <br />
                          <span>Adventure</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="it-discover-cat-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-share"></i> Share
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i> Reviews
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-sharp fa-solid fa-heart"></i>{" "}
                          WISHLIST
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="it-discover-thumb mb-30">
              {service?.serviceImage && (
                <Image
                  src={service?.serviceImage[0]}
                  alt=""
                  width={770}
                  height={451}
                  style={{ height: "auto" }}
                />
              )}
            </div>
            <div className="it-discover-dsc mb-45">
              <h3 className="it-discover-title">{service.heading}</h3>
              <p>{service.description}</p>
            </div>
            <div className="it-discover-thumb-wrap">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-discover-thumb">
                    {service?.serviceImage && (
                      <Image
                        src={service?.serviceImage[1]}
                        alt="Details Img"
                        width={370}
                        height={450}
                        style={{ height: "auto" }}
                      />
                    )}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-discover-content mb-30">
                    <h3 className="it-discover-sm-title">What We Offer</h3>
                    <div className="it-about-service-text">
                      {service.offerings?.map((offer: any, index: number) => (
                        <div className="py-2" key={index}>
                          <h3 className="it-about-service-title mb-0">
                            {offer?.title}
                          </h3>
                          <p style={{ fontSize: "16px" }}>
                            {offer?.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className="it-discover-content">
                    <h3 className="it-discover-sm-title">Challenge</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua At volutpat diam ut venenatis tellus in metus. Sem
                      et tortor consequat id porta
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <h3 className="it-discover-title mb-25">Why Choose Us?</h3>
            <div className="it-discover-tour-box mb-30">
              <ul>
                {service?.whyUs?.map((feature: string) => {
                  const randomKey = Math.random().toString(36).substr(2, 9); // Generates a short random string

                  return (
                    <li key={randomKey}>
                      <a href="#">
                        <span>
                          <CheckMarkSvg />
                        </span>
                        {feature}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div> */}
            {/* <h3 className="it-discover-title mb-25">Included/Exclude</h3>
            <div className="it-discover-included">
              <div className="row">
                <div className="col-xl-7">
                  <div className="it-discover-included-content mb-40">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Pick and Drop Services
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>1 Meal Per Day
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Cruise Dinner & Music Event
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Visit 7 Best Places in the City With Group
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="it-discover-included-content mb-40">
                    <ul>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Additional Services
                      </li>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Insurance
                      </li>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Food & Drinks
                      </li>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Tickets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <h3 className="it-discover-title mb-25">Tour Plans</h3>
            <div className="it-discover-acordian mb-30">
              <TourDetailsFaq />
            </div> */}
            {/* <h3 className="it-discover-title mb-35">Review Scores</h3>
            <div className="it-discover-review-area mb-30">
              <TourDetailsReview
                rating={service.rating}
                progresses={service.progresses}
              />
            </div> */}

            {/* <h3 className="it-discover-title mb-25">Related Tours</h3>
            <div className="it-featured-4 pb-120">
              <div className="row">
                {servicesDataThree
                  .map((service) => (
                    <div
                      key={service.id}
                      className="col-xl-6 col-lg-6 col-md-6"
                    >
                      <ServiceItemFour service={service} />
                    </div>
                  ))
                  .slice(12, 14)}
              </div>
            </div> */}
          </div>
          <div className="col-xl-4 col-lg-4">
            <DetailsSidebar service={service} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesDetailsArea;
