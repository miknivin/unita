import Link from 'next/link';
import { tourPackagesDataTwo } from '@/data/tour-packages-data';
import TourItemTwo from './tour-item/tour-item-two';

const TourTwo = () => {
  return (
    <div className="it-featured-area it-featured-style-2 pt-120 pb-120 pr-175 pl-175 p-relative">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="it-featured-title-box mb-75 text-center">
              <span className="it-section-subtitle">Featured Tours</span>
              <h3 className="it-section-title">Tours Packages</h3>
            </div>
          </div>
        </div>
        <div className="it-featured-item-wrap mb-30">
          <div className="row">
            {tourPackagesDataTwo.map((tour) => (
              <div
                key={tour.id}
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
              >
                <TourItemTwo tour={tour} />
              </div>
            ))}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="it-featured-action text-center">
            <Link href="/tour" className="it-btn-secondary">
              View All Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourTwo;
