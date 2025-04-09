"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { JobPost } from "./../../types/job-d-t"; 
import Link from "next/link";

const EventGridArea = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [events, setEvents] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://unita-admin.vercel.app/api/job"
        );
        setEvents(response.data.jobs || response.data?.data || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentEvents = events.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(events.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  // Helper function to format salary range
  const formatSalaryRange = (salaryRange?: JobPost["salaryRange"]) => {
    if (!salaryRange) return "Salary not specified";

    const aedMin = salaryRange.aed?.min;
    const aedMax = salaryRange.aed?.max;
    const usdMin = salaryRange.usd?.min;
    const usdMax = salaryRange.usd?.max;

    // Prefer AED if available, fallback to USD
    if (aedMin !== undefined && aedMax !== undefined) {
      return `AED ${aedMin.toLocaleString()} - ${aedMax.toLocaleString()}`;
    } else if (usdMin !== undefined && usdMax !== undefined) {
      return `USD ${usdMin.toLocaleString()} - ${usdMax.toLocaleString()}`;
    } else if (aedMin !== undefined) {
      return `AED ${aedMin.toLocaleString()} (min)`;
    } else if (usdMin !== undefined) {
      return `USD ${usdMin.toLocaleString()} (min)`;
    } else {
      return "Salary range incomplete";
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="it-events-area it-events-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row">
          {currentEvents.length === 0 ? (
            <div className="col-12 text-center my-5">
              <h4>No job postings available at the moment.</h4>
            </div>
          ) : (
            currentEvents.map((event) => (
              <div key={event._id} className="col-xl-4 col-lg-4 col-md-6">
                <Link
                  href={`/job-details/${event._id}`}
                  className="it-events-item"
                >
                  <div className="it-events-date-box d-flex align-items-center justify-content-center">
                    <span className="it-events-date">
                      {event.company?.name || "Unknown Company"}
                    </span>
                  </div>
                  {/* Uncomment and replace image if available */}
                  {/* <div className="it-events-thumb fix">
                    <Image
                      src={"/default-job-image.jpg"}
                      alt={event.jobTitle}
                      width={370}
                      height={212}
                      style={{ height: "auto" }}
                    />
                  </div> */}
                  <div className="it-events-content border-top-0 border rounded-bottom-3 border-1 border-black">
                    <div className="it-events-meta mb-10 d-flex align-items-center">
                      <div className="it-events-meta-icon mr-5">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <span className="it-events-meta-text">
                        {event.jobLocation || "Location not specified"}
                      </span>
                    </div>
                    <h3 className="it-events-title">
                      <button>{event.jobTitle}</button>
                    </h3>
                    <span className="bg-success-subtle px-3 py-1 border rounded-3 mb-3 d-inline-block">
                      {formatSalaryRange(event.salaryRange)}
                    </span>
                    <p className="job-description mt-3">
                      {event.jobDescription}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>

        {events.length > 0 && (
          <div className="row">
            <div className="col-xl-12">
              <div className="it-pagination">
                <ReactPaginate
                  previousLabel={
                    <i className="fa-solid fa-arrow-left-long"></i>
                  }
                  nextLabel={<i className="fa-solid fa-arrow-right-long"></i>}
                  breakLabel="..."
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventGridArea;