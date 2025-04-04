import { RightArrow } from "@/components/svg";
import { JobPost } from "@/types/job-d-t";
import { useState } from "react";
import ApplicationForm from "../../modals/ApplicationModal";
import ApplicationModal from "../../modals/ApplicationModal";
import Link from "next/link";

interface IProps {
  event: JobPost;
}

const EventDetailsArea = ({ event }: IProps) => {
  console.log(event);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="it-events-details-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          {/* Job Details */}
          <div className="col-12">
            <div className="it-events-details-content">
              <Link href={"/jobs"} className="it-events-details-btn mb-20">
                <i className="fa-solid fa-angles-left"></i>
                All Jobs
              </Link>

              {/* Job Title */}
              <h3 className="it-section-title mb-25">{event.jobTitle}</h3>

              {/* Job Info */}
              <div className="it-events-details-info mb-30">
                <div className="row align-items-center">
                  {/* Application Deadline */}
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-events-details-info-wrap">
                      <div className="it-events-details-info-box d-flex align-items-center">
                        <div className="it-events-details-info-icon">
                          <i className="fa-light fa-calendar"></i>
                        </div>
                        <div className="it-events-details-info-content">
                          <h3 className="it-events-details-info-title">
                            Application Deadline
                          </h3>
                          <span>
                            {new Date(event.applicationDeadline).toDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Location */}
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-events-details-info-wrap">
                      <div className="it-events-details-info-box d-flex align-items-center">
                        <div className="it-events-details-info-icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="it-events-details-info-content">
                          <h3 className="it-events-details-info-title">
                            Job Location
                          </h3>
                          <span>{event.jobLocation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <p>{event.jobDescription}</p>

              {/* Apply Button */}
              <div className="it-events-btn mb-40">
                <button
                  onClick={() => setShowModal(true)}
                  className="it-btn-primary"
                >
                  <span>
                    Apply Now <RightArrow />
                  </span>
                </button>
              </div>

              {/* Job Details */}
              <div className="it-events-details-link">
                <div className="it-events-details-link-content d-sm-flex align-items-center">
                  {/* Job Salary */}
                  <div className="it-events-details-lunch d-flex align-items-center">
                    <div className="it-events-details-lunch-icon">
                      <i className="fa-light fa-dollar-sign"></i>
                    </div>
                    <span>
                      Salary: $
                      {event.salaryRange?.min
                        ? `${event.salaryRange.min} - ${event.salaryRange.max}`
                        : "Not Specified"}
                    </span>
                  </div>

                  {/* Company Website */}
                  <div className="it-events-details-lunch d-flex align-items-center">
                    <div className="it-events-details-lunch-icon">
                      <i className="fa-regular fa-globe"></i>
                    </div>
                    <span>
                      <a
                        href={event.company?.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.company?.website || "No Website"}
                      </a>
                    </span>
                  </div>

                  {/* Share Button */}
                  {/* <div className="it-events-details-bars">
                    <button>
                      <i className="fa-regular fa-bars"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Responsibilities & Benefits */}
        <div className="it-events-details-bottom pt-40">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="it-events-details-content">
                <h3 className="it-section-title mb-20">Key Responsibilities</h3>
                <div className="d-flex flex-wrap gap-2">
                  {event.keyResponsibilities?.length ? (
                    event.keyResponsibilities.map((responsibility, index) => (
                      <button
                        key={index}
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        {responsibility}
                      </button>
                    ))
                  ) : (
                    <p>No key responsibilities specified</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-events-details-content">
                <h3 className="it-section-title mb-20">Benefits</h3>
                <div className="d-flex flex-wrap gap-2">
                  {event.benefits?.length ? (
                    event.benefits.map((benefit, index) => (
                      <button
                        key={index}
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        {benefit}
                      </button>
                    ))
                  ) : (
                    <p>No benefits specified</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ApplicationModal
          onClose={() => setShowModal(false)}
          JobId={event._id}
        />
      )}
    </div>
  );
};
export default EventDetailsArea;
