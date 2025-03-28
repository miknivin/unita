"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RootState } from "@/redux/rootReducer";
import { useRouter } from "next/navigation";
import {
  setAdultTickets,
  setCheckIn,
  setChildTickets,
  setIsBookingClicked,
  setKidTickets,
  setTour,
  toggleAdditionalGuide,
  toggleInternet,
  togglePhotography,
} from "@/redux/slices/bookingSlice";
import { IServiceDT } from "@/types/tour-packages-d-t";
import { servicesDataThree } from "@/data/tour-packages-data";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { updatePrice } from "@/utils/helper";
import { MinusSvg, PlusSvg } from "@/components/svg";
import ServiceContactForm from "@/components/form/service-contact";

interface IProps {
  service: IServiceDT;
}

const DetailsSidebar = ({ service }: IProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const serviceCost = 120;
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Access state from redux
  const {
    checkIn,
    adultTickets,
    kidTickets,
    childTickets,
    additionalGuide,
    internet,
    photography,
    totalCost,
  } = useAppSelector((state: RootState) => state.booking);

  // Dispatch the tour object when the component mounts
  useEffect(() => {
    dispatch(setTour(service));
  }, [dispatch, service]);

  // Dispatch the action to Navigate to booking page
  const handleProceedToBook = () => {
    if (!checkIn) {
      alert("Please select a date before proceeding!");
      return;
    }
    dispatch(setIsBookingClicked());
    router.push("/booking-page");
  };

  // handler for opening date pick up after clicking
  const handleIconClick = () => {
    setIsDatePickerOpen((prevState) => !prevState);
  };

  // Handler for Date pick up
  const handleDateChange = (date: Date | null) => {
    if (date) {
      dispatch(setCheckIn(date.toISOString()));
    } else {
      dispatch(setCheckIn(null));
    }
    setIsDatePickerOpen(false);
  };

  // Service Data
  const services = [
    {
      name: "Additional Guide",
      state: additionalGuide,
      action: toggleAdditionalGuide,
    },
    { name: "Internet", state: internet, action: toggleInternet },
    { name: "Photography", state: photography, action: togglePhotography },
  ];

  return (
    <div className="it-discover-right">
      <div className="it-discover-package mb-60">
        <div className="it-discover-package-item">
          <h3 className="it-discover-package-title">Send a Query</h3>
          <div className="it-discover-package-content px-2">
            {/* <div className="it-discover-package-list d-flex align-items-center">
              <span>Date</span>
              <div className="it-discover-package-box d-flex justify-content-between align-items-center">
                <span>
                  <DatePicker
                    selected={checkIn ? new Date(checkIn) : null}
                    onChange={handleDateChange}
                    onFocus={() => setIsDatePickerOpen(true)} 
                    placeholderText="Select a Date"
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    open={isDatePickerOpen}
                    onClickOutside={() => setIsDatePickerOpen(false)} // Close when clicking outside
                  />
                </span>

                <div
                  className="it-discover-package-icon"
                  onClick={handleIconClick}
                >
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
              </div>
            </div> */}

            <div className="it-discover-package-list mt-20 ">
              <ServiceContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="it-discover-info mb-60">
        <h3 className="it-discover-package-title">Why Choose us</h3>
        <div className="it-discover-info-box">
          {service?.whyUs?.map((feature: any, index: number) => (
            <div key={index}>
              <div className="it-discover-info-item d-flex align-items-center py-1">
                <div className="it-discover-info-icon">
                  <i className="fa-solid fa-check-to-slot" />
                </div>
                <div className="it-discover-info-text">
                  <h5>{feature?.title}</h5>
                  <span className="it-discover-info-subtitle">
                    {feature?.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailsSidebar;
