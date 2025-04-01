"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IServiceDT } from "@/types/tour-packages-d-t";
import { updatePrice } from "@/utils/helper";

interface TourItemProps {
  tour: IServiceDT;
}

const TourItemTwo = ({ tour }: TourItemProps) => {
  const [isInLove, setIsInLove] = useState<boolean>(false);
  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-thumb p-relative">
        <Image
          src={tour.image}
          alt={tour.title}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
      </div>
      {/* <div className="it-featured-top d-flex align-items-center">
        {tour.badgeTitle && (
          <div className="it-featured-offer">
            <span>{tour.badgeTitle} off</span>
          </div>
        )}

        {tour.isFeature && (
          <div className="it-featured-categories">
            <span>featured</span>
          </div>
        )}
      </div> */}
      <div className="it-featured-content">
        {/* <div className="it-featured-react-box d-flex align-items-center">
          <div className="it-featured-react">
            <button onClick={() => setIsInLove(!isInLove)}>
              <span>
                <i
                  className={
                    isInLove ? "fa-solid fa-heart" : "fa-light fa-heart"
                  }
                ></i>
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
        </div> */}
        <h3 className="it-featured-title">
          <Link href={`/service-details/${tour.id}`}>{tour.title}</Link>
        </h3>
        <div className="">
          <p>{tour.shortDescription}</p>
        </div>
        <div className="it-featured-bottom">
          <div className="it-featured-action text-center">
            <Link
              href={`/service-details/${tour.id}`}
              className="it-btn-blog featured-btn-black w-100"
            >
              {tour.btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourItemTwo;
