import Image from 'next/image';
import TourDetailsFaq from '@/components/tour/details/tour-details-faq';
import TourDetailsReview from './tour-details-review';
import ReviewBox from './review-box';
import { tourPackagesDataThree } from '@/data/tour-packages-data';
import TourItemFour from '../tour-item/tour-item-four';
import DetailsSidebar from './details-sidebar';
import { ITourDT } from '@/types/tour-packages-d-t';
import { updatePrice } from '@/utils/helper';
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
} from '@/components/svg';

import detailsImg1 from '@/assets/img/inner-page/discover/discover-2.jpg';

interface TourDetailsProps {
  tour: ITourDT;
}

const TourDetailsArea = ({ tour }: TourDetailsProps) => {
  return (
    <div className="it-discover-area pt-120 pb-120p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="it-descover-meta-box mb-30 d-flex justify-content-between">
              <div className="it-discover-meta d-flex align-items-center">
                <span className="it-discover-meta-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                {tour.address}
              </div>
              <div className="it-discover-meta-review d-flex align-items-center">
                <span className="it-discover-meta-review-icon">
                  <i className="fa-sharp fa-solid fa-star"></i>
                </span>
                <p>
                  {tour.rating} <span>({tour.review}k review)</span>
                </p>
              </div>
            </div>
            <h3 className="it-section-title mb-40">{tour.title}</h3>
            <div className="it-discover-cat-wrap mb-35">
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
                            ${Math.round(updatePrice(tour)).toFixed(2)}
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
                          <span>{tour.duration} days</span>
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
                          <i className="fa-sharp fa-solid fa-heart"></i>{' '}
                          WISHLIST
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-discover-thumb mb-30">
              <Image
                src={tour.detailsImg}
                alt=""
                width={770}
                height={451}
                style={{ height: 'auto' }}
              />
            </div>
            <div className="it-discover-dsc mb-45">
              <h3 className="it-discover-title">Tour Overview</h3>
              <p>{tour.description}</p>
            </div>
            <div className="it-discover-thumb-wrap">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-discover-thumb">
                    <Image
                      src={detailsImg1}
                      alt="Details Img"
                      width={370}
                      height={450}
                      style={{ height: 'auto' }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-discover-content mb-30">
                    <h3 className="it-discover-sm-title">Advance Facilities</h3>
                    <p className="mb-25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua At volutpat diam ut venenatis tellus in metus. Sem
                      et tortor consequat id porta
                    </p>
                  </div>
                  <div className="it-discover-content">
                    <h3 className="it-discover-sm-title">Challenge</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua At volutpat diam ut venenatis tellus in metus. Sem
                      et tortor consequat id porta
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="it-discover-title mb-25">Tour Amenities</h3>
            <div className="it-discover-tour-box mb-30">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <StarSvgTwo />
                    </span>
                    4.9 Accommodation
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <AirplaneSvg />
                    </span>
                    4.9 Airport
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <WiFiSvg />
                    </span>
                    wi-fi
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <FoodContainerSvg />
                    </span>
                    4.9 Dinner & Snacks.
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <SettingsSvg />
                    </span>
                    Additional Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <SecurityShieldSvg />
                    </span>
                    Insurance
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <CarSvg />
                    </span>
                    Transport
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="it-discover-title mb-25">Included/Exclude</h3>
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
            </div>
            <h3 className="it-discover-title mb-25">Tour Plans</h3>
            <div className="it-discover-acordian mb-30">
              <TourDetailsFaq />
            </div>
            <h3 className="it-discover-title mb-35">Review Scores</h3>
            <div className="it-discover-review-area mb-30">
              <TourDetailsReview
                rating={tour.rating}
                progresses={tour.progresses}
              />
            </div>
            <h3 className="it-discover-title mb-35">Location</h3>
            <div className="it-discover-maps mb-35">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121914.86196405679!2d-74.07886878452959!3d40.72084424392851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713501285528!5m2!1sen!2sbd"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ReviewBox />
            <h3 className="it-discover-title mb-25">Related Tours</h3>
            <div className="it-featured-4 pb-120">
              <div className="row">
                {tourPackagesDataThree
                  .map((tour) => (
                    <div key={tour.id} className="col-xl-6 col-lg-6 col-md-6">
                      <TourItemFour tour={tour} />
                    </div>
                  ))
                  .slice(12, 14)}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <DetailsSidebar tour={tour} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourDetailsArea;
