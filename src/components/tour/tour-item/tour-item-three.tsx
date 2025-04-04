import { JobPost } from "@/types/job-d-t";
import Link from "next/link";

const JobItemThree = ({ job }: { job: JobPost }) => {
  return (
    <div>
      <Link
        href={`/job-details/${job._id}`}
        style={{ boxShadow: "0 4px 30px 0 rgba(0, 0, 0, 0.1)" }}
        className="it-events-item p-0 m-0 border-0"
      >
        <div className="it-events-date-box d-flex align-items-center justify-content-center">
          <span className="it-events-date fs-3">
            {job.company?.name || "Unknown Company"}
          </span>
        </div>
        <div className="it-events-content p-3 border-top-0 border  rounded-bottom-3  border-1 border-black">
          <div className="it-events-meta mb-10 d-flex align-items-center">
            <div className="it-events-meta-icon mr-5">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <span className="it-events-meta-text">{job.jobLocation}</span>
          </div>
          <h3 className="it-events-title">{job.jobTitle}</h3>
          <span className="bg-success-subtle px-3 py-1 border rounded-3 mb-3">
            ${job.salaryRange?.min}-${job.salaryRange?.max}
          </span>
          <p style={{ marginRight: "0" }} className="job-description mt-3 mr-0">
            {job.jobDescription}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default JobItemThree;
