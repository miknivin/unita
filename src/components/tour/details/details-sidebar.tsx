'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RootState } from '@/redux/rootReducer';
import { useRouter } from 'next/navigation';
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
} from '@/redux/slices/bookingSlice';
import { ITourDT } from '@/types/tour-packages-d-t';
import { tourPackagesDataThree } from '@/data/tour-packages-data';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { updatePrice } from '@/utils/helper';
import { MinusSvg, PlusSvg } from '@/components/svg';

interface IProps {
  tour: ITourDT;
}

const DetailsSidebar = ({ tour }: IProps) => {
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
    dispatch(setTour(tour));
  }, [dispatch, tour]);

  // Dispatch the action to Navigate to booking page
  const handleProceedToBook = () => {
    if (!checkIn) {
      alert('Please select a date before proceeding!');
      return;
    }
    dispatch(setIsBookingClicked());
    router.push('/booking-page');
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
      name: 'Additional Guide',
      state: additionalGuide,
      action: toggleAdditionalGuide,
    },
    { name: 'Internet', state: internet, action: toggleInternet },
    { name: 'Photography', state: photography, action: togglePhotography },
  ];

  return (
    <div className="it-discover-right">
      <div className="it-discover-package mb-60">
        <div className="it-discover-package-item">
          <h3 className="it-discover-package-title">Package Details</h3>
          <div className="it-discover-package-content">
            <div className="it-discover-package-list d-flex align-items-center">
              <span>Date</span>
              <div className="it-discover-package-box d-flex justify-content-between align-items-center">
                <span>
                  <DatePicker
                    selected={checkIn ? new Date(checkIn) : null}
                    onChange={handleDateChange}
                    onFocus={() => setIsDatePickerOpen(true)} // Open on focus of input
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
            </div>

            <div className="it-discover-package-list mt-20">
              <span className="it-discover-tickets">Tickets</span>
              <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                <h3 className="it-discover-passenger-categories">
                  Adults (18+years)
                </h3>
                <div className="it-discover-passenger-quantity d-flex align-items-center">
                  <span
                    className="it-cart-minus"
                    onClick={() =>
                      dispatch(setAdultTickets(Math.max(0, adultTickets - 1)))
                    }
                  >
                    <MinusSvg />
                  </span>
                  <input
                    className="it-cart-input"
                    type="text"
                    value={adultTickets}
                    readOnly
                  />
                  <span
                    className="it-cart-plus"
                    onClick={() => dispatch(setAdultTickets(adultTickets + 1))}
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
              <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                <h3 className="it-discover-passenger-categories">
                  Kids (13years)
                </h3>
                <div className="it-discover-passenger-quantity d-flex align-items-center">
                  <span
                    className="it-cart-minus"
                    onClick={() =>
                      dispatch(setKidTickets(Math.max(0, kidTickets - 1)))
                    }
                  >
                    <MinusSvg />
                  </span>
                  <input
                    className="it-cart-input"
                    type="text"
                    value={kidTickets}
                    readOnly
                  />
                  <span
                    className="it-cart-plus"
                    onClick={() => dispatch(setKidTickets(kidTickets + 1))}
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
              <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                <h3 className="it-discover-passenger-categories">
                  Children (5+years)
                </h3>
                <div className="it-discover-passenger-quantity d-flex align-items-center">
                  <span
                    className="it-cart-minus"
                    onClick={() =>
                      dispatch(setChildTickets(Math.max(0, childTickets - 1)))
                    }
                  >
                    <MinusSvg />
                  </span>
                  <input
                    className="it-cart-input"
                    type="text"
                    value={childTickets}
                    readOnly
                  />
                  <span
                    className="it-cart-plus"
                    onClick={() => dispatch(setChildTickets(childTickets + 1))}
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
            </div>

            <div className="it-discover-package-service mb-30">
              <h3 className="it-discover-service-title mb-35">
                Additional Service
              </h3>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="it-discover-service-item d-flex align-items-center justify-content-between"
                >
                  <div className="it-discover-service-checkbox d-flex align-items-center">
                    <input
                      type="checkbox"
                      checked={service.state}
                      onChange={() => dispatch(service.action())}
                    />
                    <span>{service.name}</span>
                  </div>
                  <div className="it-discover-service-price">
                    <span>${serviceCost}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="it-discover-package-total">
              <h3 className="it-discover-package-total-text mb-30">
                Total Cost: <span>${totalCost.toFixed(2)}</span> / per person
              </h3>
              <div className="it-discover-package-proceed">
                <button
                  className="it-btn-primary"
                  onClick={handleProceedToBook}
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-discover-info mb-60">
        <h3 className="it-discover-package-title">Tour Information</h3>
        <div className="it-discover-info-box">
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Max Guests</span>
              <h5>Date</h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Min Age</span>
              <h5>12+</h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-plane-departure"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Tour Location</span>
              <h5>America</h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">
                Languages Support
              </span>
              <h5>Global</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="it-discover-deals">
        <h3 className="it-discover-package-title">Last Minute Deals</h3>
        <div className="it-discover-deals-box">
          {tourPackagesDataThree
            .map((item) => (
              <div key={item.id} className="it-discover-deals-item">
                <div className="it-discover-deals-content d-flex align-items-center">
                  <div className="it-discover-deals-thumb">
                    <a href="#">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={90}
                        height={90}
                        style={{ height: 'auto' }}
                      />
                    </a>
                  </div>
                  <div className="it-discover-deals-dsc">
                    <div className="it-discover-deals-rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <h3 className="it-discover-deals-text">
                      <Link href={`/tour-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <span className="it-discover-deals-price">
                      From <span>${Math.round(updatePrice(item))}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))
            .slice(2, 5)}
        </div>
      </div>
    </div>
  );
};
export default DetailsSidebar;
