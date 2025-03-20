import { tourPackagesDataThree } from '@/data/tour-packages-data';
import TourItemFour from './tour-item/tour-item-four';
import { StarSvg } from '../svg';

const TourFour = () => {
  return (
    <div className="it-featured-4 pt-120 pb-90 p-relative">
      <div className="it-featured-shape-box">
        <div className="it-featured-shape-1">
          <span>
            <StarSvg />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="it-featured-title-box mb-60 text-center">
                <span className="it-section-subtitle">Featured Tours</span>
                <h3 className="it-section-title">Tours Packages</h3>
              </div>
            </div>
          </div>
          <div className="it-featured-item-wrap">
            <div className="row">
              {tourPackagesDataThree
                .map((tour) => (
                  <div
                    key={tour.id}
                    className="col-xl-4 col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <TourItemFour tour={tour} />
                  </div>
                ))
                .slice(0, 6)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourFour;
