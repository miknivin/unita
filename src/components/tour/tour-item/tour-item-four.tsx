import Image from "next/image";
import Link from "next/link";
import { IServiceDT } from "@/types/tour-packages-d-t";
import { updatePrice } from "@/utils/helper";

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemFour = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-4-thumb p-relative">
        <Image
          src={service.image}
          alt={service.title}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
        <div className="it-featured-content">
          <div className="it-featured-meta mb-5">
            <a href="https://www.google.com/maps">
              <i className="fa-solid fa-location-dot"></i> {service.address}
            </a>
          </div>
          <h3 className="it-featured-title">
            <Link href={`/tour-details/${service.id}`}>{service.title}</Link>
          </h3>
          <div className="it-featured-review-box pb-25 mb-25 d-flex align-items-center justify-content-between">
            <div className="it-featured-price d-flex align-items-center">
              <i className="fa-regular fa-circle-dollar"></i>
              <p>
                From <span>${Math.round(updatePrice(service)).toFixed(2)}</span>{" "}
                {service.badgeTitle && <del>${service.price.toFixed(2)}</del>}
              </p>
            </div>
            <div className="it-featured-review d-flex align-items-center">
              <i className="fa-solid fa-star"></i>
              <p>
                <span>{service.rating}</span> ({service.review}k review)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="it-featured-top z-index d-flex align-items-center">
        {service.badgeTitle && (
          <div className="it-featured-offer">
            <span>{service.badgeTitle} off</span>
          </div>
        )}
        {service.isFeature && (
          <div className="it-featured-categories">
            <span>featured</span>
          </div>
        )}
      </div>
      <div className="it-featured-react-box z-index">
        <div className="it-featured-react">
          <button>
            <span>
              <i className="fa-light fa-heart"></i>
            </span>
          </button>
        </div>
        <div className="it-featured-react">
          <button>
            <span>
              <i className="fa-regular fa-camera"></i>
            </span>
          </button>
        </div>
        <div className="it-featured-react">
          <button>
            <span>
              <i className="fa-regular fa-video"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ServiceItemFour;
