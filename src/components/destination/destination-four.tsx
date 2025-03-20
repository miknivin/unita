import Image from 'next/image';
import DestinationItemThree from './destination-item/destination-item-three';
import { destinationDataFour } from '@/data/destination-data';

import shapeImg from '@/assets/img/home-3/destination/shape/star.png';

const DestinationFour = () => {
  return (
    <div className="it-destination-list-area p-relative pt-120 pb-90">
      <div className="it-destination-list-shape d-none d-sm-block">
        <Image src={shapeImg} alt="Shape Img" width={103} height={105} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <div className="it-destination-list-title-box text-center mb-60">
              <span className="it-section-subtitle">Our destination lists</span>
              <h3 className="it-section-title">
                Checkout Beautiful Places Around the World
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {destinationDataFour.map((destination) => (
            <div key={destination.id} className="col-xl-4 col-lg-4 col-md-6">
              <DestinationItemThree destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DestinationFour;
